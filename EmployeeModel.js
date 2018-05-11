const fs = require('fs');

class Employee {
  constructor(obj) {
    this.name = obj.name;
    this.position = obj.position;
    this.username = obj.username;
    this.password = obj.password;
    this.isLoggedIn = obj.isLoggedIn || false;
  }
  
  static readData(file, callback) {
    // convert object to Employee instance
    // read -> convert
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        data[i] = new Employee(data[i]);
      }
      callback(data);
    })
  }
  
  static registerEmployee(obj, callback) {
    this.readData('./employee.json', function(employees) {
      employees.push(obj);
      this.write(employees);
      callback(employees.length);
    })
  }

  static writeData(data) {
    let jsonToString = JSON.stringify(data, null, 2);
    fs.writeFile('./employee.json', jsonToString, 'utf8', (err) => {
      if (err) throw err;
    })
  }
}

Employee.getAllData();
module.exports = Employee;