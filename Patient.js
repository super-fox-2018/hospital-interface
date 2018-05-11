const fs = require('fs');

class Patient {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.diagnosis = props.diagnosis;
  }

  static readData(cb) {
    fs.readFile('patient.json', 'utf8', (err, data) => {
      if (err) throw err;
      const temp = JSON.parse(data);
      const patients = temp.map(obj => new Patient(obj));
      cb(patients);
    });
  }

  static writeData(data, cb) {
    fs.writeFile('patient.json', data, err => {
      if (err) throw err;
      cb();
    });
  }

  static addPatient(props, cb) {
    this.readData(patients => {
      const newId = patients.length === 0 ? 1 : patients[patients.length - 1].id + 1;
      props.id = newId;
      const newPatient = new Patient(props);
      patients.push(newPatient);
      const string = JSON.stringify(patients, null, 2);
      this.writeData(string, () => {
        cb(patients.length);
      });
    });
  }
}

module.exports = Patient;
