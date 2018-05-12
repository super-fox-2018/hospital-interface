let fs = require('fs')

class Patient {
  constructor(name,diagnosis) {
    this.id = 0
    this.name = name;
    this.diagnosis = diagnosis;
  }
}

class Employee {
  constructor(username, password,jabatan) {
    this.username = username
    this.password = password
    this.jabatan = jabatan
    this.isLogin = false
  }
}
class EmployeeModel{
	constructor(){

	}
	static readFile(file,cb){
		fs.readFile(file,(err,data)=>{
			if (err) throw err
				let dataParse = JSON.parse(data)
			cb(dataParse)

		})
	}
	static register(dataRegister,cb){
		this.readFile('./employee.json',(dataEmployee)=>{
			let employee = new Employee(dataRegister[0],dataRegister[1],dataRegister[2])
			dataEmployee.push(employee)
			cb(dataEmployee)
			fs.writeFile('./employee.json',JSON.stringify(dataEmployee),(err)=>{
				if (err) throw err
					
			})
		})
	}
	static login(dataLogin,cb){
		this.readFile('./employee.json',(dataEmployee)=>{
			let counter = 0
			for(var i=0;i<dataEmployee.length;i++){
				if (dataLogin[0]===dataEmployee[i].username && dataLogin[1]===dataEmployee[i].password) {
					//console.log(`user ${dataLogin[0]} logged in successfully`)
					dataEmployee[i].isLogin = true
					counter++

				}
			}
			if (counter>0) {
				cb(`user ${dataLogin[0]} logged in successfully`)
				}
				else{
					cb(undefined)
				}
				fs.writeFile('./employee.json',JSON.stringify(dataEmployee),(err)=>{
					if (err) {
						throw  err
					}
				})
		})
	}
	static addPatient(name,diagnosis,cb){
		this.readFile('./employee.json',(dataEmployee)=>{
			this.readFile('./patient.json',(dataPatient)=>{
				let patient = new Patient(name,diagnosis)
				let counter = 0
				for(var i=0;i<dataEmployee.length;i++){
					if (dataEmployee[i].isLogin===true) {
						if (dataEmployee[i].jabatan==='dokter') {
							counter++
						}
					}
				}
				if (counter>0) {
					patient.id+=(dataPatient.length+1)
					dataPatient.push(patient)
					cb(dataPatient)
				}
				else{
					cb(undefined)
				}
				fs.writeFile('./patient.json',JSON.stringify(dataPatient),(err)=>{
					if (err) {
						throw err
					}
				})
			})
		})
	}
	static logout(user,cb){
		this.readFile('./employee.json',(dataEmployee)=>{
			let counter = 1
			let employee = ''
			for(var i=0;i<dataEmployee.length;i++){
				if (dataEmployee[i].isLogin===true) {
					dataEmployee[i].isLogin=false
					employee = dataEmployee[i].username
					counter = 0
				}
			}
			if (counter===0) {
				cb(employee)
			}
			else{
				cb(undefined)
			}
			fs.writeFile('./employee.json',JSON.stringify(dataEmployee),(err)=>{
				if (err) {throw err}
			})
		})
	}
}

module.exports = EmployeeModel