var modelku = require('./model.js')
var viewku = require('./view.js')
var models = new modelku()
var views = new viewku()


class Employ {
  constructor() {}

  //inputUsername, inputPassword, inputRole
  buatEmployee(username, password, role) {
    let obj = {}
    obj.username = username
    obj.password = password
    obj.role = role
    obj.islogin = false
    models.tambahEMP(obj)
    views.viewAdd(obj)

  }


  loginAct(username, password) {
    let result = models.Login(username, password, function(a) {
      views.viewLogin(a)
    })
  }
}

module.exports = Employ
