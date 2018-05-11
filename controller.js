
const EmployeeModel = require('./model.js')
const View = require('./view.js')

class Controller{
    constructor(){

    }

    static addEmployee(add,pass,role){
            EmployeeModel.register(add,pass,role)
            View.add(add,pass,role)
            
    }

    static listEmployee(){
      
        let list = EmployeeModel.read('./data.json',function(err,data){
           
        })
        View.list(list)
    
    }

    static loginEmployee(user,password){
        let log = EmployeeModel.login(user,password)
    }
}



module.exports = Controller