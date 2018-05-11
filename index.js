const Controller = require('./controller');

const option = process.argv[2];
const argumentList = [];
for (let i = 3; i < process.argv.length; i += 1) {
  argumentList.push(process.argv[i]);
}

switch (option) {
  case 'register':
    Controller.handleRegister({
      username: argumentList[0],
      position: argumentList[2],
      password: argumentList[1],
    });
    break;
  case 'login':
    Controller.handleLogin({
      username: argumentList[0],
      password: argumentList[1],
    });
    break;
  case 'addPatient':
    Controller.handleAddPatient({
      name: argumentList[0],
      diagnosis: [...argumentList.slice(1)],
    });
    break;
  case 'logout':
    Controller.handleLogout({
      username: argumentList[0],
      password: argumentList[1],
    });
    break;
  default:
}
