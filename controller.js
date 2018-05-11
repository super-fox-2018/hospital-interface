let fs = require('fs')
let EmployeeModel = require('./model.js')
let view = require('./view.js')
class Controller{
	constructor(){

	}
	static register(employeeAttributes){
		EmployeeModel.register(employeeAttributes)
		view.register(employeeAttributes)
	}
	static login(employeeAttributes){
		EmployeeModel.login(employeeAttributes)
		view.login(employeeAttributes)
	}
}
module.exports = Controller