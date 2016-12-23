const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    return Math.pow(this.r, 2)*Math.PI;
  }

  getPerimeter() {
    return 2*this.r*Math.PI;
  }

  toString() {
    return `${this.r}`
  }
}

module.exports = Circle;
