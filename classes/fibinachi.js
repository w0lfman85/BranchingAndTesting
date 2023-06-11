//Bin to Grey
class Fibonachi {
    static getNumberByPosition(n) {
      let a = 1;
      let b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  }
  
  module.exports = Fibonachi;
  