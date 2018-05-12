const Model = require('./model');
const View = require('./view');

class Controller {

  static list() {
    Model.findAll(function(err, data) {
      if (err) {
        throw err
      }
      View.showList(data)
    })
  }

  static registerUser(inputData) {
    Model.register(inputData, (err, data) => {
      if (!err) {
        View.showRegisterEmployee(data)
      }
    })
  }

  static login(loginData) {
    Model.loginEmployee(loginData, (err, data) => {
      if (!err) {
        View.showSuccessLogin(data)
      }

    })

  }

  static addPatientData(dataPatient) {
    Model.addPatient(dataPatient, (err, data) => {
      if (!err) {
        View.addNewPatient(data)
      }
    })
  }
}

module.exports = Controller
