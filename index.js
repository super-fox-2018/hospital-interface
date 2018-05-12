const Controller = require('./controller.js')

let argv = process.argv;

var command = argv[2];

var arrCommand = []

    for(let a = 3; a < argv.length; a++){
        arrCommand.push(argv[a]);
    }
   
switch(argv[2]){
    case 'read': {Controller.getData(Controller.getTemp);  break}
    case 'register': {Controller.getData(Controller.createRegister);  break} 
}
