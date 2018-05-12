const fs = require('fs');

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}

class Employee {
  constructor(username, password, role) {
    this.username = username
    this.password = password
    this.role = role
    this.isLogin = false
  }
}


class Model {
  static findAll(callback) {
    fs.readFile('./employee.json', (err, data) => {
      if (!err) {
        callback(null, JSON.parse(data))
      }
    })
  }

  static findPatient(callback) {
    fs.readFile('./patient.json', (err, data) => {
      if (!err) {
        callback(null, JSON.parse(data))
      }
    })
  }


  static register(data, cb) {
    Model.findAll((err, dataEmployee) => {
      if (!err) {
        let dataNewEmployee = new Employee(data[0], data[1], data[2])
        dataEmployee.push(dataNewEmployee)
        let totalEmployee = dataEmployee.length
        fs.writeFile('./employee.json', JSON.stringify(dataEmployee, null, 2), 'utf8', (errWrite) => {
          if (!errWrite) {
            cb(null, `save data success {username:${data[0]},password:${data[1]},role:${data[2]}}. total employee : ${totalEmployee}`)
          }
        })
      }
    })
  }

  static loginEmployee(dataLogin, cb) {
    Model.findAll((err, employeeData) => {
      if (!err) {
        var counter = 0
        for (var i = 0; i < employeeData.length; i++) {
          if (dataLogin[0] === employeeData[i].username && dataLogin[1] === employeeData[i].password) {
            counter++
            employeeData[i].isLogin = true
          } else {
            employeeData[i].isLogin = false
          }
        }
        if (counter > 0) {
          cb(null, `user ${dataLogin[0]} logged in successfully`)
        } else {
          cb(null, 'username / password salah')
        }
        fs.writeFile('./employee.json', JSON.stringify(employeeData, null, 2), 'utf8', (err) => {
          if (!err) {}
        })
      }
    })
  }
  static addPatient(dataPatient, cb) {
    Model.findAll((err, dataEmployeeLogin) => {
      if (!err) {
        Model.findPatient((err, patientData) => {
          let lastId = patientData.length + 1
          for (var i = 0; i < dataEmployeeLogin.length; i++) {
            if (dataEmployeeLogin[i].role === 'dokter' && dataEmployeeLogin[i].isLogin === true) {
              let dataNewPatient = new Patient(lastId, dataPatient[0], dataPatient.slice(1).join(' '))
              patientData.push(dataNewPatient)
              let totalPatient = patientData.length
            }
          }
          fs.writeFile('./patient.json', JSON.stringify(patientData), null, 2), 'utf8', (err) => {
            if (!err) {
              cb(null, `data patient berhasil di tambahkan. Total.patient : ${totalPatient}`)
            }
          }
        })
      }
    })
  }
}


module.exports = Model
