class View{
	constructor(){

	}
	static register(dataEmployee){
		console.log(`Kamu berhasil register ${dataEmployee[dataEmployee.length-1].username} 
			total Employee ${dataEmployee.length}`)
	}
	static login(dataEmployee){
		if (dataEmployee!==undefined) {
			console.log('Selamat Datang di Hospital Apps '+ dataEmployee)
		}
		else{
			console.log('username / password salah')
		}
	}
	static addPatient(dataPatient){
		if (dataPatient!==undefined) {
			console.log(`berhasil menambahkan patient. Jumlah Patient : ${dataPatient.length}`)
		}
		else{
			console.log('tidak memiliki akses')
		}
	}
}

module.exports = View