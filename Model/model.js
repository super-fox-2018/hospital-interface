var fs = require("fs")


class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}

class Employee {
  constructor(username, password,role) {
    this.username = username
    this.password = password
    this.role = role
    this.status = ""
  }


}

class EmployeeFeature {

  static read(file,cb) {
    fs.readFile(file,function(err,data) {
      if(err) {
        throw err
      }
      var parseFile =JSON.parse(data)
      cb(parseFile)
    }

    )
  }

  static save(file,data,cb) {
    fs.writeFile(file,JSON.stringify(data),function(err) {
      if(err) {
        throw err
      }
     cb(JSON.stringify(data))
    })
  }



  static register(username,password,role,cb) {
    EmployeeFeature.read("./employee.json",function(dataEmployee) {
      var employee = new Employee(username,password,role)
      dataEmployee.push(employee)
      var jumlahEmployee = dataEmployee.length
      EmployeeFeature.save("./employee.json",dataEmployee,function(result){
       cb(`save data success {"username":"${username}","password":"${password}","role":"${role}"}. Total employee: ${jumlahEmployee}`)
      }) 
    })
  }

  static login(username,password,cb) {
    var check = 1
    EmployeeFeature.read("./employee.json",function(dataEmployee) {
      for(let i=0;i<dataEmployee.length;i++) {
        if(dataEmployee[i].username == username && dataEmployee[i].password == password) {
          dataEmployee[i].status = "true"
          check*=0
        }else{
          dataEmployee[i].status ="false"
        }
      }
      if(check == 0) {
         cb(`user ${username} login successfully`)
       }else{
        cb(`username/password wrong`)
       }
       EmployeeFeature.save("./employee.json",dataEmployee,function(result){

       })

    })
  }


  static addPatient(patientName,diagnosis,cb) {
    var check = 1
    EmployeeFeature.read("./employee.json",function(dataEmployee) {
      EmployeeFeature.read("./patient.json",function(dataPatient) {
        var newId = dataPatient.length+1
      for(let i=0;i<dataEmployee.length;i++) {
        if(dataEmployee[i].status == "true" && dataEmployee[i].role == "dokter"){
          check*=0
          var patient = new Patient(newId,patientName,diagnosis)
          dataPatient.push(patient)
         
        }
      }
      if(check == 0) {
          cb(`data pasien berhasil ditambahkan. Total data pasien ${dataPatient.length}`) 
      }else{
        cb(`tidak memiliki akses untuk add patient`)
      }
      EmployeeFeature.save("./patient.json",dataPatient,function(result){

      })

      })
    })
  }

  static logout(cb) {
    var check = 1
    EmployeeFeature.read("./employee.json",function(dataEmployee) {
      for(let i=0;i<dataEmployee.length;i++) {
        if(dataEmployee[i].status == "true") {
          dataEmployee[i].status = "false"
          check*=0
        }
      }
      if(check == 0) {
         cb(`user logout successfully`)
       }else{
        cb(`user hasn't login yet`)
       }
       EmployeeFeature.save("./employee.json",dataEmployee,function(result){

       })

    })

  }


}



 module.exports = EmployeeFeature


