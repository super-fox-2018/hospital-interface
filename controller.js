'use strict'

const View = require('./view.js');
const Model = require('./model.js');

let view = new View();
let model = new Model();

class Controller {
  registerEmployee(name, position, username, password) {
    model.addEmployee(name, position, username, password, view.displayRegister);
  }

  loginEmployee(username, password) {
    model.checkPassword(username, password, isSuccessful => {
      if (isSuccessful) {
        view.displayLogin(username);
      } else {
        view.displayText('username / password is wrong');
      }
    });
  }

  addPatient(name, diagnosis) {
    model.checkDoctor(isDoctor => {
      if (isDoctor) {
        model.addPatient(name, diagnosis, view.displayAddPatient);
      } else {
        view.displayText('only doctor has this access');
      }
    });
  }
}

module.exports = Controller;