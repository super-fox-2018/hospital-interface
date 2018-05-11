// slave_driver (zehahahaha)

const model = require("./model.js")
const employee = new model.Employee
const patients = new model.Patient
const view = require("./view.js")

class Controller {

    constructor () {

    }

    static undefined () {
        view.displayUndefined ()
    }

    static employeeList () {
        employee.employeeList ()
    }

    static register (name, position, username, password) {
        employee.employeeRegister(name, position, username, password)
    }

    static login (username, password) {
        employee.employeeLogin(username, password)
    }

    static logout (username) {
        employee.employeeLogout(username)
    }

    static addPatient (name, symptoms1, symptoms2, symptoms3) {
        patients.add (name, symptoms1, symptoms2, symptoms3)
    }
}

module.exports = Controller