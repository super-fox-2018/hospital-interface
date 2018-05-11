let fs = require ('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  static addPatient(name, diagnosis, callback){ // callback
    fs.readFile('./employee.json', (err, dataEmployee) => {
      if(err) throw err
      dataEmployee = JSON.parse(dataEmployee)

      for(let i=0; i<dataEmployee.length; i++){
        if(dataEmployee[i].role !== "Dokter" && dataEmployee[i].login === true){
          if(i+1 < dataEmployee.length){
            continue
          }
        }
        else if(dataEmployee[i].role === "Dokter" && dataEmployee[i].login === true){
          fs.readFile('./patient.json', (err, data) => {
            if (err) throw err
            data=JSON.parse(data)
            let dataPatient = {
              id : data.length+1,
              name : name,
              diagnosis : diagnosis
            }
            data.push(dataPatient)
            Patient.writeData(data)
            callback(name)
          })
        }
        else if(i+1 === dataEmployee.length){
          callback()
        }
      }

    })
  }

  static writeData(patient){
    var data = fs.writeFile('patient.json', JSON.stringify(patient, null, 2), "utf8", function (err) {
      if (err) throw err;
    })
  }
}

module.exports = Patient