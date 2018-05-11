const fs = require('fs');

class Employee {
  constructor(props) {
    this.username = props.username;
    this.password = props.password;
    this.position = props.position;
    this.isLoggedIn = props.isLoggedIn || false;
  }

  static readData(cb) {
    fs.readFile('employee.json', 'utf8', (err, data) => {
      if (err) throw err;
      const temp = JSON.parse(data);
      const employees = temp.map(props => new Employee(props));
      cb(employees);
    });
  }

  static writeData(data, cb) {
    fs.writeFile('employee.json', data, err => {
      if (err) throw err;
      cb();
    });
  }

  static register(props, cb) {
    this.readData(employees => {
      const newEmployee = new Employee(props);
      employees.push(newEmployee);
      const string = JSON.stringify(employees, null, 2);
      this.writeData(string, () => {
        cb(newEmployee, employees.length);
      });
    });
  }

  static searchUser(employees, username) {
    for (let i = 0; i < employees.length; i += 1) {
      const user = employees[i];
      if (user.username === username) return user;
    }
    return null;
  }

  static checkLoggedInUser(employees) {
    for (let i = 0; i < employees.length; i += 1) {
      const employee = employees[i];
      if (employee.isLoggedIn) return employee;
    }
    return null;
  }

  static login(username, password, cb) {
    this.readData(employees => {
      const currentlyLoggedInUser = this.checkLoggedInUser(employees);
      if (currentlyLoggedInUser) currentlyLoggedInUser.isLoggedIn = false;
      const user = this.searchUser(employees, username);
      if (user && user.password === password) {
        user.isLoggedIn = true;
        const string = JSON.stringify(employees, null, 2);
        this.writeData(string, () => cb(user.username));
      } else {
        cb();
      }
    });
  }

  static checkLoggedInDoctor(cb) {
    this.readData(employees => {
      for (let i = 0; i < employees.length; i += 1) {
        const employee = employees[i];
        console.log(employee);
        if (employee.position === 'dokter' && employee.isLoggedIn) {
          cb(true);
          return;
        }
      }
      cb(false);
    });
  }

  static logout(username, password, cb) {
    this.readData(employees => {
      const user = this.searchUser(employees, username);
      if (user && user.password === password) {
        user.isLoggedIn = false;
        const string = JSON.stringify(employees, null, 2);
        this.writeData(string, () => cb(user.username));
      } else {
        cb();
      }
    });
  }
}

module.exports = Employee;
