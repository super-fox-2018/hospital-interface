const Controller = require('./controller.js');
let controller = new Controller();

const argv = process.argv;
let task = argv[2];
let input = [];
for (let i = 3; i < argv.length; i++) {
  input.push(argv[i]);
}

switch (task) {
case 'register':
  controller.registerEmployee(...input);
  break;
case 'login':
  controller.loginEmployee(...input);
  break;
case 'addPatient':
  let name = input[0];
  input.shift();
  controller.addPatient(name, input);
  break;
default:
  // statements_def
  break;
}