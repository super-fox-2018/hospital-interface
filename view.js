class View{
    static register(employee, total){
        console.log(`Save data success ${employee}. Total employee : ${total} `)
    }

    static login(username, password){
        console.log(`User ${username} logged in successfully`)
    }

    static error(message){ // ini dipakai misal ada login error
        console.log(message)
    }

    static addPatient(name, diagonis){
        console.log(`New Patient ${name}, Diagnosis: ${diagonis}  `)
    }

    static logout(username, password){
        console.log(`Good Bye!`)
    }
}

module.exports = View