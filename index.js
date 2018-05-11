const Controller = require('./controller.js')
const View = require('./view.js')
let argv = process.argv


// switch(argv[2]){
//     case 'add' :{Controller.addEmployee(argv[3],argv[4],argv[5]);break}
// }
if(argv[2]==='add'){
    Controller.addEmployee(argv[3],argv[4],argv[5])
}else if(argv[2]=== 'list'){
    Controller.listEmployee()
}else if(argv[2] === 'login'){
    Controller.loginEmployee(argv[3],argv[4])
}
