const Shape = require('./shape.js');

class Rectangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a*this.b;
  }

  getPerimeter() {
    return 2*this.a + 2*this.b;
  }

  toString() {
    return `${this.a}, ${this.b}`
  }
}

module.exports = Rectangle;
