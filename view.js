var controllerku = require('./controller.js')
var models = require('./model.js')
model = new models()

class View {

  viewAdd(isi) {
    console.log('Save data success ', isi)
    let a = model.getData(function(a) {
      console.log('Total Employee ' + Number(a.length + 1))
    })

  }


  viewLogin(ad) {
    console.log(ad)
  }


}


module.exports = View
