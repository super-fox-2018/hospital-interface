const controller = require("./controller.js");
const fs = require('fs');


class View{
  constructor(filename){
    this._filename = filename;
    this._data = [];
  }

  registerView(obj, listNum){
    let detail = JSON.stringify(obj);
    console.log("save data success " + detail + ". Total employee: " + listNum);
  }

  loginView(empObj, isValid, alreadyLogged){
    if(isValid === true){
      console.log("user " + empObj.username + " logged in successfully");
    }
    else if(isValid === false){
      console.log("username / password is wrong");
    }
    else if(alreadyLogged === true ){
      console.log("Someone is already logged in. Please log out first.");
    }
  }

  addPatient(patientLength, isDoctor, isLogged){
    if(isLogged === false){
      console.log("You are not logged in. Please log in to your account and try again.");
    }
    else{
      if(isDoctor === false){
        console.log("You do not have access to add patient");
      }
      else{
        console.log("Patient data added. Total Patient: " +  patientLength);
      }
    }
  }

  logOutView(username, isLogged){
    if(isLogged === true){
      console.log("Successfully logged " + username + " out.");
    }
    else{
      console.log("You are not logged in. You can try logging in if you want to log out :) ");
    }
  }
}

let view = new View("employee.json");
module.exports = view;