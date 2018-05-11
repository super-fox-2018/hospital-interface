const controller = require("./controller.js")

const argv = process.argv;
let userInput = argv[2];

let objEmp = {
  name: argv[3],
  username : argv[4],
  password: argv[5],
  position: argv[6],
  login : false,
}

let objPat = {
  id: argv[3],
  name: argv[4],
  symptoms: [],
}


switch(userInput){
  case "register":{
    controller.register(objEmp);
    break;
  }
  case "login":{
    let obj1 = {
      username: argv[3],
      password: argv[4],
    };
    controller.login(obj1);
    break;
  }
  case "addPatient":{
    let x = 5;
    while(argv[x] !== undefined){
      let symptoms = argv[x];
      objPat.symptoms.push(symptoms);
      x++;
    };
    controller.addPatient(objPat);
    break;
  }

  case "logout":{
    let username = argv[3];
    controller.logOut(username);
    break;
  }

}