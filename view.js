class View {
  static showSaveSuccess(employee, totalEmployees) {
    const string = JSON.stringify(employee);
    console.log(`Save data success ${string}. Total employee : ${totalEmployees}`);
  }

  static showError(message) {
    console.log(message);
  }

  static showLoginMessage(username) {
    console.log(`user ${username} logged in successfully`);
  }

  static showLogoutMessage(username) {
    console.log(`user ${username} logged out successfully`);
  }

  static showAddPatient(totalPatients) {
    console.log(`data pasien berhasil ditambahkan. Total data pasien : ${totalPatients}`);
  }
}

module.exports = View;
