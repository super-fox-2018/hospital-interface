const fs = require('fs');

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
  }
}

class Model {
  static read(callback) {
    fs.readFile('./employee.json', (err, data) => {
      if (!err) {
        let dataEmployee = JSON.parse(data)

        callback(null, dataEmployee)
      } else {
        callback(err, null)
      }
    })
  }

  static write(name, position, password, callback) {
    Model.read((err, data) => {
      if (!err) {
        let objUser = new Employee(name, position, name, password)

        data.push(objUser)
        var dataString = JSON.stringify(data,null,2)
        fs.writeFile('./employee.json', dataString, (errWrite) => {
          let statusMessage

          if (!errWrite) {
            statusMessage = `user ${objUser.name}, has been success register`

            callback(false, statusMessage)
          } else {
            statusMessage = 'register failed'

            callback(true, statusMessage)
          }
        })
      }
    })
  }

  static login(username,password,callback){
    let statusMessage
    Model.read((err,data)=>{
      if (!err) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].username==username) {
            if (data[i].password==password) {
              statusMessage = `user ${data[i].username} logged in successfully`
              return callback(false,statusMessage);
            }
          }
          else {
            statusMessage = 'username / password wrong'
            return callback(true,statusMessage);
          }
        }
      }
    });
  }

}

module.exports = Model
