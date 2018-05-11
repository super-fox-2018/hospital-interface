// slave (*ctss ctsss #whipsound)

const view = require("./view.js")
const fs = require("fs")

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
    this.currentLogin = []
  }

  getEmployees (cb) {
    fs.readFile("./employee.json", "utf8", function(err, data){
      if(err) throw err
      cb(data)
    })
  }

  employeeList () {
    this.getEmployees(function callback (data){
      const employeeArr = JSON.parse(data)
      console.log (employeeArr)
    })
  }

  employeeRegister (nameStr, pos, user, pass) {
    
    this.getEmployees(function callback (data){
      let employeeArr = JSON.parse(data) 
      
      employeeArr.push({name : nameStr, position : pos, username : user , password : pass, id : employeeArr.length+1, login : false})
      let stress = employeeArr
      view.displayRegister (stress[stress.length-1].username, 
                            stress[stress.length-1].password, 
                            stress[stress.length-1].position, 
                            stress.length)
      
      const overwrite = JSON.stringify(employeeArr, null , 2)
      fs.writeFile("./employee.json", overwrite, function(err, data){
      if(err) throw err
      })
    })
  }

  employeeLogin (user, pass) {
    this.getEmployees(function callback (data){
      const employeeArr = JSON.parse(data)
      for(let b=0; b<this.employeeArr.length; b++) {
        if(this.employeeArr[b].username === user && 
            this.employeeArr[b].password == pass && 
            this.currentLogin[0] === undefined) {
            this.currentLogin.push(this.employeeArr[b])
            view.displayLogin (this.employeeArr[b].name)
            
        } else if (this.currentLogin[0] !== undefined) {
          view.displayNotLoggedOut (this.currentLogin[0].name)
        } else {
          view.displayLoginFail ()
        }
      }
    })
  }

  employeeLogout (user) {
    if(this.currentLogin === undefined) {
      view.displayNoLogin ()
    } else if (this.currentLogin.username === user) {
      view.diplayLogOut (this.currentLogin.name)
      this.currentLogin = []
    }
  }
}

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  getPatient (cb) {
    fs.readFile("./patient.json", "utf8", function(err, data){
      if(err) throw err
      cb(data)
    })
  }

  patientList () {
    this.getEmployees(function callback (data){
      const employeeArr = JSON.parse(data)
      console.log (employeeArr)
    })
  }

  add (nameStr, sym1, sym2, sym3) {
    
    this.getEmployees(function callback (data){
      let patientArr = JSON.parse(data) 
      if(Employee.currentLogin.position === 'doctor') {
        patientArr.push({name : nameStr, symptom1 : sym1, symptom2 : sym2 , symptom3 : sym3, id : patientArr.length+1})
      let stress = patientArr
      view.addPatient (stress[stress.length-1].name, 
                        stress[stress.length-1].symptom1, 
                        stress[stress.length-1].symptom2, 
                        stress[stress.length-1].symptom3,
                        stress[stress.length-1].id,
                        stress.length)
      
      const overwrite3 = JSON.stringify(patientArr, null , 2)
      fs.writeFile("./patient.json", overwrite3, function(err, data){
      if(err) throw err
      })
      } else {
        view.failPatient()
      }
      
    })
  }

}

module.exports = {
  Employee : Employee,
  Patient : Patient
}
