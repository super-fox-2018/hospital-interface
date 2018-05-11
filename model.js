const fs = require("fs");

class Patient {
  constructor(obj) {
    this.id = obj.id,
    this.name = obj.name,
    this.diagnosis = obj.diagnosis,
    this.symptoms = obj.symptoms

  }

  static Read(cb){
    fs.readFile('patient.json', "utf8", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        for(let i = 0; i < data.length ; i++){
          data[i] = new Patient(data[i]);
        }
        cb(data);
      });
  }

  static Write(newPatient){
    let content = JSON.stringify(newPatient, null, 2);
    fs.writeFile("patient.json", content, (err) =>{
      if (err) throw err
    });
  }


}

class Employee {
  constructor(obj) {
    this.name = obj.name;
    this.username = obj.username;
    this.password = obj.password;
    this.position = obj.position;
    this.loginStatus = obj.loginStatus || false;
  }

  static Read(cb){
    fs.readFile('employee.json', "utf8", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        for(let i = 0; i < data.length ; i++){
          data[i] = new Employee(data[i]);
        }
        cb(data);
      });
  }

  static Write(newEmployees){
    let content = JSON.stringify(newEmployees, null, 2);
    fs.writeFile("employee.json", content, (err) =>{
      if (err) throw err
    });
  }

  static registerEmployee(employeeObj, cbLength){
    let classThis = this;
    Employee.Read(function(employees){
      employees.push(employeeObj);
      classThis.Write(employees)
      cbLength(employees.length);
    });
  }

  static isLogged(cbLogged){
    Employee.Read(function(employees){
      var isLogged = false;
      for(let i = 0; i < employees.length; i++){
        if(employees[i].loginStatus === true){
          isLogged = true;
        }
      }
      cbLogged(isLogged)
    })
  }

  static logIn(employeeObj,cbView){
    var isValid = false
    var classThis = this;

    Employee.Read(function(employees){
      Employee.isLogged(function(isLogged){
        if(isLogged === false){
          for(let i = 0; i < employees.length ; i++){
            if(employees[i].username ===  employeeObj.username){
              if(employees[i].password === employeeObj.password){
                employees[i].loginStatus = true;
                classThis.Write(employees);
                isValid = true;
              }
            }
          }
        }
        cbView(isValid, isLogged);
      })
    })
  }

  static addPatient(patientObj, cbAdd){
    Employee.Read(function(employees){
      var isDoctor = false;
      var isLogged = false;
      for(let i = 0; i < employees.length;i++){
        if(employees[i].loginStatus === true){
          isLogged = true;
          if(employees[i].position.toLowerCase() === "doctor"){
            isDoctor = true;
            Patient.Read(function(patient){
              patient.push(new Patient(patientObj));
              Patient.Write(patient);
            })
          }
        }
      }
      Patient.Read(function(patient){
        cbAdd(parseInt(patient[patient.length - 1].id) + 1 , isDoctor, isLogged)
      })
    })
  }

  static logOut(username,cbLogOut){
    var isLogged = false;
    var classThis = this;
    Employee.Read(function(employees){
      for(let i = 0; i < employees.length; i++){
        if(employees[i].username === username){
          if(employees[i].loginStatus === true){
            isLogged = true;
            employees[i].loginStatus = false;
            classThis.Write(employees);
          }
        }
      }
      cbLogOut(isLogged);
    })
  }

}

module.exports = {Patient, Employee};
