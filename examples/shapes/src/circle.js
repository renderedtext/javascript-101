const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    const area = (Math.pow(this.r, 2)*Math.PI);
    return this.round(area);
  }

  getPerimeter() {
    const perimeter = 2*this.r*Math.PI;
    return this.round(perimeter);
  }

  toString() {
    return `${this.r}`
  }
}

module.exports = Circle;
