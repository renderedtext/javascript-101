class Shape {
  constructor() {
    if (new.target === Shape)
    {
      throw new Error('Can\'t instantiate Shape');
    }
  }

  getArea() {
  }

  getPerimeter() {
  }

  toString() {
  }

  round(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }
}

module.exports = Shape;
