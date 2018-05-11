const Employee = require('./Employee');
const Patient = require('./Patient');
const View = require('./view');

class Controller {
  static handleRegister(props) {
    Employee.register(props, (addedEmployee, totalEmployees) => {
      View.showSaveSuccess(addedEmployee, totalEmployees);
    });
  }

  static handleLogin(props) {
    Employee.login(props.username, props.password, loggedInUsername => {
      if (loggedInUsername) View.showLoginMessage(loggedInUsername);
      else View.showError('username / password wrong');
    });
  }

  static handleLogout(props) {
    Employee.logout(props.username, props.password, loggedOutUserName => {
      if (loggedOutUserName) View.showLogoutMessage(loggedOutUserName);
      else View.showError('username / password wrong');
    });
  }

  static handleAddPatient(props) {
    Employee.checkLoggedInDoctor(loggedInStatus => {
      if (loggedInStatus) {
        Patient.addPatient(props, totalPatients => {
          View.showAddPatient(totalPatients);
        });
      } else {
        View.showError('tidak memiliki akses untuk add patients!');
      }
    });
  }
}

module.exports = Controller;
