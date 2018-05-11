const fs = require('fs')
class Employee {
  constructor(position, username, password, LogInstatus) {
    this.position = position
    this.username = username
    this.password = password
    this.LogInstatus = false
  }
  static readData(callback){
    fs.readFile('employee.json','utf-8',(err,data)=>{
      if(err) throw err;
      callback(data)
    })
  }
  static writeData(employeeData,callback){
    fs.writeFile('employee.json',employeeData,'utf-8',(err)=>{
      if(err) throw err;
      callback()
    })
  }

  static signup(username,password,position,callback){
    this.readData(function(data){
      data = JSON.parse(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].username === username){
          callback(username,false)
          return
        }
      }
      let newEmployee = new Employee(position,username,password)
      data.push(newEmployee)
      Employee.writeData(JSON.stringify(data,null,2),function(){
        callback(JSON.stringify(newEmployee),data.length)
      })
    })   
  }

  static login(username,password,callback){
    this.readData(function(data){
      data = JSON.parse(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].LogInstatus === true){
          callback('has logged in',data[i].username);return
        }
      }
      for(let i = 0; i < data.length; i++){
        if(data[i].username === username && data[i].password === password){
          data[i].LogInstatus = true
          Employee.writeData(JSON.stringify(data,null,2),function(){
              callback(data[i].LogInstatus,data[i].username)
              return
          })
        }
      }
    })
  }

  static checkEmployeeStatus(callback){
    this.readData(function(data){
      data = JSON.parse(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].LogInstatus === true){
          if(data[i].position.toLowerCase() !== 'dokter'){
            callback(false)
            return
          }else{
            callback(true)
            return
          }
        }
      }
      callback(false)
    })
  }

  static Logout(callback){
    this.readData(function(data){
      data = JSON.parse(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].LogInstatus === true){
          data[i].LogInstatus = false
          Employee.writeData(JSON.stringify(data,null,2),function(){
            callback(data[i].username)
            return
          })
        }
      }
    })
  }
}

module.exports = Employee