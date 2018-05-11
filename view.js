class View{
	constructor(){

	}
	static register(dataEmployee){
		console.log(dataEmployee)
	}
	static login(dataEmployee){
		console.log('Selamat Datang di Hospital Apps '+dataEmployee[0])
	}
}

module.exports = View