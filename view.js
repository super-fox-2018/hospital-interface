// display here

class View {

    constructor () {

    }

    static displayUndefined () {
        console.log('Type : "node index.js employeelist"')
        console.log('Type : "node index.js register <nama> <position> <username> <password>"')
        console.log('Type : "node index.js login <username> <password>"')
        
    }

    static displayRegister (str1, str2, str3, num) {
        console.log(`save data success {username : ${str1}, password : ${str2}, role : ${str3}. Total employee : ${num}`)
    }

    static displayLogin (str) {
        console.log(`user ${str} logged in sucessfully`)
    }

    static displayLoginFail () {
        console.log('Username / Password salah')
    }

    static displayNotLoggedOut (str) {
        console.log(`User ${str} is logged in right now, please come back later or after he/she logged out`)
    }

    static displayNoLogin () {
        console.log('Currently no user using out database right now')
    }

    static displayLogOut (str) {
        console.log(`User ${str} has succesfully logged out from our system`)
    }

    static addPatient (name, s1, s2, s3, id, num) {
        console.log(`Add patient ${id} ${name} ${s1} ${s2} ${s3} `)
        console.log(`You sucessfully added patient data. Total Number of patients : ${num}`)
    }

    static failPatient () {
        console.log('Only doctor can add patients')
    }
}

module.exports = View