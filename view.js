class View{

    static signup(dataSignedUp,dataLength){
        if(dataLength === false){
            console.log(`${dataSignedUp} has been taken already!`)
            return
        }
        console.log(`save data success : ${dataSignedUp}, Total Employee : ${dataLength}`)
    }
    static EmployeeLogin(condition,username){
        if(condition === true) {
            console.log(`${username} has been logged in!`)
            return
        }
        if(condition === 'has logged in'){
            console.log(`${username} has logged in already!`)
            return
        }
        console.log('Wrong Username or Password')
    }
    static addPatient(status, length){
        if(status === false){
            console.log("tidak memiliki akses untuk add patient")
            return
        }
        console.log("data pasien berhasil ditambahkan. Total data pasien : " + length)
    }
    static logout(nameEmployee){
        console.log(`${nameEmployee} has logged out!`)
    }
}

module.exports = View