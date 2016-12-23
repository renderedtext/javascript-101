const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea() {
    const s = (this.a + this.b + this.c)/2;
    const pSquare = s*(s - this.a)*(s - this.b)*(s - this.c);

    return Math.sqrt(pSquare);
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  toString() {
    return `${this.a}, ${this.b}, ${this.c}`;
  }
}

module.exports = Triangle;
