let fs = require('fs')

class Employee {
  constructor(username, password,jabatan) {
    this.username = username
    this.password = password
    this.jabatan = jabatan
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
	static register(dataRegister){
		this.readFile('./employee.json',(dataEmployee)=>{
			let employee = new Employee(dataRegister[0],dataRegister[1],dataRegister[2])
			dataEmployee.push(employee)
			fs.writeFile('./employee.json',JSON.stringify(dataEmployee),(err)=>{
				if (err) throw err
					console.log('data berhasil di tambah')
			})
		})
	}
	static login(dataLogin){
		this.readFile('./employee.json',(dataEmployee)=>{
			for(var i=0;i<dataEmployee.length;i++){
				if (dataLogin[0]===dataEmployee[i].username && dataLogin[1]===dataEmployee[i].password) {
					console.log(`user ${dataLogin[0]} logged in successfully`)
				}
				else{
					console.log('username/password salah')
				}
			}
		})
	}
}

module.exports = EmployeeModel