const fs = require('fs')
class Patient {
    constructor(id, name, diagnosis) {
      this.id = id
      this.name = name
      this.diagnosis = diagnosis
    }

    static readData(callback){
        fs.readFile('patient.json','utf-8',(err,data)=>{
            if(err) throw err;
            callback(data)
        })
    }

    static writeData(patientData,callback){
        fs.writeFile('patient.json',patientData,'utf-8',(err)=>{
            if(err) throw err;
            callback()
          })
    }

    static addPatient(Name,listSickness,status,callback){
        if(status === false){
            callback(false)
            return
        }
        this.readData(function(data){
            data = JSON.parse(data)
            let id = data.length === 0 ? 1 : data[data.length-1].id + 1
            let newPatient = new Patient(id, Name, listSickness)
            data.push(newPatient)
            Patient.writeData(JSON.stringify(data,null,2),function(){
                callback(true,data.length)
            })
        })
    }
}

module.exports = Patient
  