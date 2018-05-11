const View = require('./view.js');
const Model = require('./model.js');

let view = new View();
let model = new Model();

class Controller {
  registerEmployee(name, position, username, password) {
    model.addEmployee(name, position, username, password, view.displayRegister);
  }

  loginEmployee(username, password) {
    model.checkPassword(username, password, view.displayLogin);
  }

  addPatient(name, diagnosis) {
    model.addPatient(name, diagnosis, view.displayAddPatient);
  }
}

module.exports = Controller;
