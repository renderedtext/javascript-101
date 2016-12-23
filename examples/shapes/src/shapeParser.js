const Square = require('./square.js');
const Rectangle = require('./rectangle.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle');

const isPositiveNumber = number => {
  return (!isNaN(number) && number > 0);
};

const validateSquareParams = data => {
  if (data.length !== 1)
  {
    return false;
  }
  else
  {
    return isPositiveNumber(data[0]);
  }
};

const convertToSquare = data => {
  data = data.map(parseFloat);

  if (validateSquareParams(data))
  {
    return new Square(data[0]);
  }
  else
  {
    throw new Error('Invalid data for Square');
  }
};

const validateCircleParams = data => {
  if (data.length !== 1)
  {
    return false;
  }
  else
  {
    return isPositiveNumber(data);
  }
};

const convertToCircle = data => {
  data = data.map(parseFloat);

  if (validateCircleParams(data))
  {
    return new Circle(data[0]);
  }
  else
  {
    throw new Error('Invalid data for Circle');
  }
};

const validateRectangleParams = data => {
  if (data.length !== 2)
  {
    return false;
  }
  else
  {
    return isPositiveNumber(data[0]) && isPositiveNumber(data[1])
  }
};

const convertToRectangle = data => {
  data = data.map(parseFloat);

  if (validateRectangleParams(data))
  {
    return new Rectangle(data[0], data[1]);
  }
  else
  {
    throw new Error('Invalid data for Rectangle');
  }
};

const validateTriangleParams = data => {
  if (data.length !== 3)
  {
    return false;
  }
  else
  {
    return isPositiveNumber(data[0]) && isPositiveNumber(data[1]) && isPositiveNumber(data[2]);
  }
};

const convertToTriangle = data => {
  data = data.map(parseFloat);

  if (validateTriangleParams(data))
  {
    return new Triangle(data[0], data[1], data[2]);
  }
  else
  {
    throw new Error('Invalid data for triangle');
  }
};

module.exports.convert = (shape, data) => {
  switch(shape) {
    case 'triangle':
      return convertToTriangle(data);
      break;
    case 'square':
      return convertToSquare(data);
      break;
    case 'rectangle':
      return convertToRectangle(data);
      break;
    case 'circle':
      return convertToCircle(data);
      break;
    default:
      throw new Error('Unknown shape');
  }
};

