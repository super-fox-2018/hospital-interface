const ModelTest = require('./test.js')
const ViewTest = require('./viewTest.js')

class Controller {
  static register(username, password, role) {
    ModelTest.write(username, password, role, (err, statusMessage) => {
      if (!err) {
        ViewTest.showMessage(statusMessage)
      } else {
        ViewTest.showErrorMessage(statusMessage)
      }
    })
  }
  static login(username,password){
    ModelTest.login(username,password,(err,statusMessage)=>{
      if (!err) {
        ViewTest.showMessage(statusMessage)
      } else {
        ViewTest.showErrorMessage(statusMessage)
      }
    })
  }
}

module.exports = Controller
