const fs = require('fs');

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id;
    this.name = name;
    this.diagnosis = diagnosis;
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
    this.isLoggedin = false;
  }
}

class Model {
  readEmployee(callback) {
    let fileString = fs.readFile('./employee.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      callback(null, data);
    });
  }

  writeEmployee(data, callback) {
    let content = JSON.stringify(data, null, 2);
    fs.writeFile('employee.json', content, (err) => {
      if (err) throw err;
      callback();
    });
  }

  readPatient(callback) {
    let fileString = fs.readFile('./patient.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      callback(null, data);
    });
  }

  writePatient(data, callback) {
    let content = JSON.stringify(data, null, 2);
    fs.writeFile('patient.json', content, (err) => {
      if (err) throw err;
      callback();
    });
  }

  checkPassword(username, password, callback) {
    let model = this;
    this.readEmployee(function(err, data) {
      let employeeList = data;
      let isTrue = false;
      for (let i = 0; i < employeeList.length; i++) {
        let employee = employeeList[i];
        if (employee.username === username || employee.password === password) {
          employee.isLoggedIn = true;
          isTrue = true;
          model.writeEmployee(employeeList, function() {
            callback(username, true);
          });
        }
      }
      if (!isTrue) {
        callback(username, false);
      }
    });
  }

  addEmployee(name, position, username, password, callback) {
    let model = this;
    this.readEmployee(function(err, data) {
      let employeeList = data;
      let newEmployee = new Employee(name, position, username, password);
      employeeList.push(newEmployee);
      model.writeEmployee(employeeList, function() {
        callback(newEmployee, employeeList.length);
      });
    });
  }

  addPatient(name, diagnosis, callback) {
    let model = this;
    let notDoctor = true;
    this.readEmployee(function(err, data) {
      let employeeList = data;
      for (let i = 0; i < employeeList.length; i++) {
        let employee = employeeList[i];
        if (employee.position === 'dokter' && employee.isLoggedIn) {
          notDoctor = false;
          model.readPatient(function(err, data) {
            let patientList = data;
            let newId;
            if (patientList.length > 0) {
              let lastPatient = patientList[patientList.length - 1];
              newId = lastPatient.id + 1;
            } else {
              newId = 1;
            }
            patientList.push(new Patient(newId, name, diagnosis));
            model.writePatient(patientList, function() {
              callback(true);
            });
          });
        }
      }
      if (notDoctor) {
        callback(false);
      }
    });
    return notDoctor;
  }
}

module.exports = Model;
