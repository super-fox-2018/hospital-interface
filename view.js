class View {
  displayData(object) {
    console.log(object);
    console.log(`Jumlah orang: ${object.length}`);
  }

  displayRegister(person, total) {
    console.log(`sucessfully register ${JSON.stringify(person, null, 2)}. total employee = ${total}`);
  }

  displayLogin(username, boolean) {
    if (boolean) {
      console.log(`user ${username} logged in sucessfully`);
    } else {
      console.log('username or password is wrong');
    }
  }

  displayAddPatient(boolean) {
    if (boolean) {
      console.log('data pasien berhasil ditambah');
    } else {
      console.log('tidak memiliki akses untuk add pasien');
    }
  }

  display(string) {
    console.log(string);
  }
}

module.exports = View;
