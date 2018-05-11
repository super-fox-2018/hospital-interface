const {Patient, Employee} = require("./model.js");
const view = require ("./view.js")



class Controller{
  constructor(){
  }

  register(empObj){
    Employee.registerEmployee(new Employee(empObj), function(employeeLength){
      view.registerView(obj, employeeLength);
    });
  }

  login(empObj){
    Employee.logIn(empObj, function(isValid, alreadyLogged){
      view.loginView(empObj, isValid, alreadyLogged)
    })
  }

  addPatient(patientObj){
    Employee.addPatient(patientObj, function(patientLength, isDoctor, isLogged){
      console.log("xxxx" + patientLength)
      view.addPatient(patientLength, isDoctor, isLogged);
    })
  }

  logOut(username){
    Employee.logOut(username, function(isLogged){
      view.logOutView(username, isLogged);
    })
  }
}

let controller = new Controller();
module.exports = controller;
