const Controller = require('./controller.js');
var argv = process.argv
var command = argv[2]


if (command === 'list') {
  // console.log('masuk list')
  Controller.list()
}

else if (command === 'register') {
  let register = argv.slice(3)
  Controller.registerUser(register)
}

 else if (command === 'login') {
  let login = argv.slice(3)
  Controller.login(login)
}

 else if (command === 'addPatient') {
  let addPatient = argv.slice(3)
  Controller.addPatientData(addPatient)
}
