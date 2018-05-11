const Employee = require('./EmployeeModel.js');
const View = require('./view.js');

class Controller {
  static handleRegister(argumentList) {
    let username = argumentList[0];
    let password = argumentList[1];
    let role = argumentList[2];

    let employee = new Employee(username, role, username, password);
    employee.addEmployee(employee);
    View.displayRegister(employee);
  }

  static handleLogin(argumentList) {}
  static handleAddPatient(argumentList) {}
}

module.exports = Controller