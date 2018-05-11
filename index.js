// input here

const argv = process.argv
const controller = require("./controller.js")

class Input {

    constructor () {

    }

    static retrieveCommand (str) {
        if(str === undefined) {
            controller.undefined ()
        } else if (str === 'employeelist') {
            controller.employeeList ()
        } else if (str === 'register') {  // name position username pass
            controller.register(argv[3], argv[4], argv[5], argv[6])
        } else if (str === 'login') { // username pass
            controller.login(argv[3], argv[4])
        } else if (str === 'logout') { // username
            controller.logout(argv[3]) 
        } else if (str === 'addpatient') { //name symptoms1 symptoms2 symptoms3
            controller.addPatient(argv[3], argv[4], argv[5], argv[6])
        }
    }
}

Input.retrieveCommand(argv[2])

