class Shape {
  constructor() {
    if (new.target === Shape)
    {
      throw new Error('ez');
    }
  }

  getArea() {
  }

  getPerimeter() {
  }

  toString() {
  }
}

module.exports = Shape;
