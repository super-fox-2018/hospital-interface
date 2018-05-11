const argv = process.argv;
const Controller = require('./controller.js');

function processInput(input) {
  let inputList = input.slice(2);
  let action = inputList[0];
  let argumentList = [];
  for (let i = 1; i < inputList.length; i++) {
    argumentList.push(inputList[i]);
  }

  route(action, argumentList);
  // console.log(inputList)
}

function route(action, argumentList) {
  if (action === 'register') {
    Controller.handleRegister(argumentList); // return something
  }
  if (action === 'login') {
    Controller.handleLogin(argumentList);
  }
  if (action === 'addPatient') {
    Controller.handleAddPatient(argumentList);
  }
}

processInput(argv);