const Rectangle = require('./rectangle.js');

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
  }

  toString() {
    return `${this.a}`;
  }
}

module.exports = Square;
