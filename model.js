"use strict"
const fs = require('fs')
const index = require('./index.js')


class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}
class Employee{
  constructor(username,password,job) {
    this.username = username
    this.password = password
    this.job = job
    this.isLogin = false
 
  }
}

class EmployeeModel {
  constructor(){

  }

  static read(file,cb){
    fs.readFile(file, function(err, data){
      if(err) throw err
      let dataParse = JSON.parse(data)
      cb(dataParse)
      // console.log(dataParse)
    })
 
  }

  static register(input,password,role){
    
    this.read('./data.json', function(employees){

      let newEmployees = new Employee(input,password,role)
      employees.push(newEmployees)
      
   
      fs.writeFile('./data.json',JSON.stringify(employees,null ,2),(err)=>{
        if(err) throw err
        console.log('data berhasil ditambah');
        
      })
   
    })
  }

  static login(user,pass){
      this.read('./data.json',function(employee){
        // console.log(employee)
        let counter = 0
        let nama = ''
        for(let i=0;i<employee.length;i++){
          if(user === employee[i].username && pass == employee[i].password){
            counter++
            nama+=employee[i].username
            employee[i].isLogin =true
          }
        }
        if(counter > 0){
          console.log(`${nama} berhasil login`)
        

        }else if(counter == 0){
          console.log('pas salah')
        }
        fs.writeFile('./data.json',JSON.stringify(employee,null,2),(err)=>{
          if(err) throw err
        })
      })
  }




}

//let model = new Employee('data.json')
module.exports = EmployeeModel