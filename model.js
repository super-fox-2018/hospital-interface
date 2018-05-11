const fs = require('fs');
class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  addPatient(){
    
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
    this.isLogin = false;
  }

  static readFile(callback) {
    fs.readFile('employee.json', 'utf8', (err, data) => {
      if (err) throw err;
      callback(JSON.parse(data))
    })
  }

  register(obj, callback) {
    let arrList = []
    Employee.readFile(function (data) {
      data.push(obj)
      arrList = data
      let arrJson = JSON.stringify(arrList, null, 2);
      Employee.write(arrJson)
      callback(data)
    })
  }

  static readByUsername(name, callback) {
    this.readFile(function (data) {
      for (let i = 0; i < data.length; i++) {
        if (name === data[i].username) {
          callback(true)
          break;
        }
      }
      callback(false);
    })
  }

  static write(arr) {
    fs.writeFile('employee.json', arr, (err) => {
      if (err) throw err;
    })
  }

  static getList(call) {
    this.readFile(function (data) {
      call(data)
    })
  }
  static login(username, password, callback) {
    this.readFile(function (data) {
      let isFound = false;
      for (let i = 0; i < data.length; i++) {
        if (username === data[i].username && password === data[i].password) {
          Employee.setLogin(data[i].username, data);
          isFound = true;
          callback(true)
          break;
        }
      }
      if (!isFound) {
        callback(false)
      }
    })
  }

  static setLogin(username, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].username !== username) {
        data[i].isLogin = false;
      }
      else{
        data[i].isLogin = true;
      }
    }
    let arrJson = JSON.stringify(data, null, 2);
    this.write(arrJson);
  }
}

module.exports = { Employee, Patient }
