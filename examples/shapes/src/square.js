const Rectangle = require('./rectangle.js');

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
  }
}

module.exports = Square;
