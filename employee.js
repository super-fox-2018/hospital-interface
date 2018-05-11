let fs = require ('fs')

class Employee {
  constructor(name, position, username, password) {
    this.name = name,
    this.position = position,
    this.username = username,
    this.password = password
  }

  static register(username, password, position, callback){
    fs.readFile('./employee.json',(err,data) => {
      if(err) throw err
      data=JSON.parse(data)
      let employee = {
        username : username,
        password : password,
        role : position,
        login : false
      }
      data.push(employee)
      Employee.writeData(data)
      callback([employee, data.length])
    })
  }

  static writeData(employee){
    var data = fs.writeFile('employee.json', JSON.stringify(employee, null, 2), "utf8", function (err) {
      if (err) throw err;
    })
  }

  // panggil kembali pakai callback
  static login(username, password, callback){
    fs.readFile('./employee.json', (err, data) => {
      if(err) throw err
      data=JSON.parse(data)
      for(let i=0; i<data.length; i++){
        if(username !== data[i].username){
          if(i+1 < data.length){
            continue
          }
        }
        else if(username === data[i].username){
          if(data[i].password === password){
            data[i].login = true
            Employee.writeData(data)
            callback (username) // klu berhasil callback username
          }
          else{
            callback() // klu salah callback kosong aja
          }
        }
      }
    })
  }

  static logout(username, password){
    fs.readFile('./employee.json', (err, data) => {
      if(err) throw err
      data=JSON.parse(data)
      for(let i=0; i<data.length; i++){
        if(username !== data[i].username){
          if(i+1 < data.length){
            continue
          }
        }
        else if(username === data[i].username){
          if(data[i].password === password){
            data[i].login = false
            Employee.writeData(data)
          }
        }
      }
    })
  }
}

module.exports = Employee