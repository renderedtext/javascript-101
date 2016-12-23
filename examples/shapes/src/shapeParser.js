const Square = require('./square.js');
const Rectangle = require('./rectangle.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle');

const self = module.exports;

module.exports.isPositiveNumber = number => {
  return (!isNaN(number) && number > 0);
};

module.exports.validateSquareParams = data => {
  if (data.length !== 1)
  {
    return false;
  }
  else
  {
    return self.isPositiveNumber(data[0]);
  }
};

module.exports.convertToSquare = data => {
  data = data.map(parseFloat);

  if (self.validateSquareParams(data))
  {
    return new Square(data[0]);
  }
  else
  {
    throw new Error('Invalid data for Square');
  }
};

module.exports.validateCircleParams = data => {
  if (data.length !== 1)
  {
    return false;
  }
  else
  {
    return self.isPositiveNumber(data);
  }
};

module.exports.convertToCircle = data => {
  data = data.map(parseFloat);

  if (self.validateCircleParams(data))
  {
    return new Circle(data[0]);
  }
  else
  {
    throw new Error('Invalid data for Circle');
  }
};

module.exports.validateRectangleParams = data => {
  if (data.length !== 2)
  {
    return false;
  }
  else
  {
    return self.isPositiveNumber(data[0]) && self.isPositiveNumber(data[1])
  }
};

module.exports.convertToRectangle = data => {
  data = data.map(parseFloat);

  if (self.validateRectangleParams(data))
  {
    return new Rectangle(data[0], data[1]);
  }
  else
  {
    throw new Error('Invalid data for Rectangle');
  }
};

module.exports.validateTriangleParams = data => {
  if (data.length !== 3)
  {
    return false;
  }
  else
  {
    return self.isPositiveNumber(data[0]) && self.isPositiveNumber(data[1]) && self.isPositiveNumber(data[2]);
  }
};

module.exports.convertToTriangle = data => {
  data = data.map(parseFloat);

  if (self.validateTriangleParams(data))
  {
    return new Triangle(data[0], data[1], data[2]);
  }
  else
  {
    throw new Error('Invalid data for Triangle');
  }
};
