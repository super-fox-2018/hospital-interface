const Model = require('./model')
const View = require('./view')
class Controller {
    static register(username, password, role) {
        let name = username
        Model.Employee.readByUsername(name, function (isFound) {
            if (isFound) {
                let msg = `${name} already exist`
                View.dislpay(msg)
            } else {
                let objEmp = new Model.Employee(name, role, username, password)
                objEmp.isLogin = false;
                objEmp.register(objEmp, function (data) {
                    let total = data.length;
                    let msg = 'Save data success'
                    View.dislpayRegister(msg, objEmp, total)
                })
            }
        })
    }
    static getList() {
        Model.Employee.getList(function (data) {
            View.dislpayList(data)
        });
    }

    static login(user,password){
        Model.Employee.login(user, password, function(isFound){
            let msg = '';
            if (isFound){
                msg = `user ${user} logged in successfully`
            }else{
                msg = `username / password wrong`
            }
            View.dislpay(msg);
        })
    }

    static addPatient(arr){
        console.log('todolist')
    }


}

module.exports = Controller;