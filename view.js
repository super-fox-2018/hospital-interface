const Controller = require('./controller');

class View {
  static showList(data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }

  static showRegisterEmployee(data) {
    console.log(data);

  }

  static showSuccessLogin(data) {
    console.log(data);
  }

  static addNewPatient(data) {
    console.log(data,'===================');
    console.log('gfhgfhdgfsgf');
  }
}


module.exports = View
