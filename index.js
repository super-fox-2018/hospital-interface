const Controller = require('./testController.js')

const commands = process.argv

switch (commands[2]) {
  case 'register':
    Controller.register(commands[3], commands[4], commands[5])
    break;
  case 'login':
    Controller.login(commands[3],commands[4])
    break;
}
