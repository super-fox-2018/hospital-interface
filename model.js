var fs = require('fs');
class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}

class Employee {
  constructor(inputUsername, inputPassword, inputRole) {
    this.username = inputUsername
    this.password = inputPassword
    this.role = inputRole
  }


  makeEmployee(inputUsername, inputPassword, inputRole) {
    let emp = new Employee(inputUsername, inputPassword, inputRole)
    return emp
  }


  tambahEMP(datainput) {
    this.getData(function(dataAdd) {
      dataAdd.push(datainput)
      var reparse = JSON.stringify(dataAdd, null, 2)
      fs.writeFile("employee.json", reparse, function(err) {
        if (err) {}
      });
    })
  }

  Login(username, password, cb) {
    let hasil = ''
    this.getData(function(dataparse) {
      for (let i = 0; i < dataparse.length; i++) {
        hasil = ''
        if (dataparse[i].username === username && dataparse[i].password === password) {
          hasil += 'User ' + username + ' login successfully'

          dataparse[i].islogin = true
          break;

        } else {
          hasil += 'username / password wrong'

        }
      }
      cb(hasil)
      var reparse = JSON.stringify(dataparse, null, 2)
      fs.writeFile("employee.json", reparse, function(err) {
        if (err) {}
      });

    })
  }



  getData(callback) {
    fs.readFile('./employee.json', 'utf8', (err, data) => {
      if (err) throw err;
      callback(JSON.parse(data))
    });

  }

  //i'ven't  used since then
  write(data) {
    fs.writeFile('employee.json', data, (err) => {
      if (err) throw err;
    })
  }


  DocterAct(username, password) {}




}

module.exports = Employee
