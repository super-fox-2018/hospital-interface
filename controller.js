const Employee = require('./employee.js')
const Patient = require('./patient.js')
const View = require('./view.js')

class Controller{
    static signup(username,password,role){
        Employee.signup(username,password,role,function(data,length){
            View.signup(data,length)
        })
    }
    static login(username,password){
        Employee.login(username,password,function(status,username){
            View.EmployeeLogin(status,username)
        })
    }
    static addpatient(Name,listSickness){
        Employee.checkEmployeeStatus(function(status){
            Patient.addPatient(Name,listSickness,status,function(status,length){
                View.addPatient(status,length)
            })
        })
    }
    static logout(){
        Employee.Logout(function(nameEmployee){
            View.logout(nameEmployee)
        })
    }
}

module.exports = Controller