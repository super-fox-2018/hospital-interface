'use strict'

const Controller = require('./controller.js');
let controller = new Controller();

const argv = process.argv;
let todo = argv[2];
let input = [];
for (let i = 3; i < argv.length; i++) {
  input.push(argv[i]);
}

switch (todo) {

case 'login':
  controller.loginEmployee(...input);
  break;

case 'addPatient':
  let name = input[0];
  input.shift();
  controller.addPatient(name, input);
  break;

  case 'register':
  controller.registerEmployee(...input);
  break;

default:
  break;
}