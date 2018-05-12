'use strict'


class View {
    displayRegister(person, total) {
      console.log(`Successful to Register ${JSON.stringify(person, null, 2)}. Total Employee: ${total}`);
    }

    displayLogin(username) {
      console.log(`${username} login successful`);
    }

    displayData(object) {
      console.log(object);
      console.log(`Total: ${object.length}`);
    }
  
    displayAddPatient(totalPatient) {
      console.log(`Total Patient: ${totalPatient}`);
    }
  
    displayText(string) {
      console.log(string);
    }
  }
  
  module.exports = View;