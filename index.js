const argv = process.argv
const command = argv[2]
let username = argv[3]
let password = argv[4]
let number = argv[3]
let patientName = argv[4]
let diagnosis = argv.slice(5)
let role = argv[5]
const Controller = require("./controller.js")

switch (command) {
	case "register":
		Controller.register(username,password,role)
		break;
	case "login":
		Controller.login(username,password)
		break;
	case "addPatient":
		Controller.addPatient(patientName,diagnosis)
		break;
	case "logout":
		Controller.logout()
		break;					
	default:
		// statements_def
		break;
}

