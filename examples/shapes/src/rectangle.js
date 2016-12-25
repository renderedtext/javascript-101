const Shape = require('./shape.js');

class Rectangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  getArea() {
    const area = this.a*this.b;
    return this.round(area);
  }

  getPerimeter() {
    const perimeter = 2*this.a + 2*this.b;
    return this.round(perimeter);
  }

  toString() {
    return `${this.a}, ${this.b}`
  }
}

module.exports = Rectangle;
