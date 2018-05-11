var controllerku = require('./controller.js')
var model = require('./model.js')

model = new model()
let ctr = new controllerku()

var input = process.argv[2] // register
var inputUsername = process.argv[3] // username
var inputPassword = process.argv[4] // password
var inputRole = process.argv[5] // role


if (input === 'register') {
  // buatEmployee(username, position, password, role) {
  ctr.buatEmployee(inputUsername, inputPassword, inputRole)
}

if (input === 'login') {
  ctr.loginAct(inputUsername, inputPassword)
}

// if (input === 'addPatient') {
//   // ctr.loginAct(inputUsername, inputPassword)
// }
