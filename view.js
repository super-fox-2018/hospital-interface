class View {
  static displayRegister(obj) {
    console.log(`save data success`);
    console.log(obj.data[obj.total - 1]);
    console.log(`Total employee: ${obj.total}`);
  }
}

module.exports = View