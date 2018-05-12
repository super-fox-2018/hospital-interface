class View {
  displayData(object) {
    console.log(object);
    console.log(`Jumlah orang: ${object.length}`);
  }

  displayRegister(person, total) {
    console.log(`sucessfully register ${JSON.stringify(person, null, 2)}. total employee = ${total}`);
  }

  displayLogin(username) {
    console.log(`user ${username} logged in sucessfully`);
  }

  displayAddPatient(totalPatient) {
    console.log(`data pasien berhasil ditambah. jumlah pasien sekarang: ${totalPatient}`);
  }

  displayText(string) {
    console.log(string);
  }
}

module.exports = View;
