let fs = require('fs')
let EmployeeModel = require('./model.js')
let view = require('./view.js')
class Controller{
	constructor(){

	}
	static register(employeeAttributes){
		let data = EmployeeModel.register(employeeAttributes,(data,err)=>{
			view.register(data)
		})
		
	}
	static login(employeeAttributes){
		let data = EmployeeModel.login(employeeAttributes,(data,err)=>{
			view.login(data)
		})
	}
	static addPatient(namePatient,diagnosis){
		let data = EmployeeModel.addPatient(namePatient,diagnosis,(data,err)=>{
			view.addPatient(data)
		})
	}
}
module.exports = Controller