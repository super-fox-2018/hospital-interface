const Employee = require('./EmployeeModel.js');
const View = require('./view.js');

class Controller {
  static handleRegister(argumentList) {
    let obj = {
      name: argumentList[0],
      position: argumentList[2],
      username: argumentList[0],
      password: argumentList[1],
      isLoggedIn: false
    }

    // let employee = new Employee(username, role, username, password);
    // employee.addEmployee(employee);
    Employee.registerEmployee(new Employee(obj), function(len) {
      View.displayRegister(obj, len);
    })
  }

  static handleLogin(argumentList) {
    let username = argumentList[0];
    let password = argumentList[1];

    // read data
  }
  static handleAddPatient(argumentList) {}
}

module.exports = Controller