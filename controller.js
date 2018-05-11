const EmployeeFeature = require("./model.js")
const View = require("./view.js")

class Controller {

	static register(username,password,role) {
		EmployeeFeature.register(username,password,role,function(result) {
			View.register(result)
		})		
	}

	static login(username,password) {
		EmployeeFeature.login(username,password,function(dataLogin) {
			View.login(dataLogin)
		})
	}

	static addPatient(patientName,diagnosis) {
		EmployeeFeature.addPatient(patientName,diagnosis,function(result) {
			View.addPatient(result)
		})
	}

	static logout() {
		EmployeeFeature.logout(function(dataLogout) {
			View.logout(dataLogout)
		})
	}
}

module.exports = Controller