const fs = require('fs');

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password

    this._data = [];
    this._total = 0;
  }

  get total() { return this._total; }
  get data() { return this._data; }
  
  addEmployee(employee) {
    this.readData();
    let newData = {
      'name': employee.name,
      'position': employee.position,
      'username': employee.username,
      'password': employee.password
    }
    
    this._data.push(newData);
    this._total = this._data.length;
    this.writeData();
  }

  readData() {
    let parser = fs.readFileSync('./employee.json', 'utf8');
    let jsonData = JSON.parse(parser)
    this._data = jsonData;
    return this._data;
  }

  writeData() {
    let string = JSON.stringify(this._data, null, 2)
    fs.writeFileSync('./employee.json', string, 'utf8');
  }
}

module.exports = Employee;