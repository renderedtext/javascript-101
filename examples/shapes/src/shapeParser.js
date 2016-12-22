const Square = require('./square.js');
const Rectangle = require('./rectangle.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle');

const isPositiveNumber = number => {
  return (!isNaN(number) && number > 0);
};

const validateSquare = data => {
  return isPositiveNumber(data);
};

const convertToSquare = data => {
  const a = parseFloat(data);

  if (validateSquare(a))
  {
    return new Square(a);
  }
  else
  {
    throw new Error('Invalid data for Square');
  }
};

const validateCircle = data => {
  return isPositiveNumber(data);
};

const convertToCircle = data => {
  const r = parseFloat(data);

  if (validateCircle(r))
  {
    return new Circle(r);
  }
  else
  {
    throw new Error('Invalid data for Circle');
  }

};

module.exports.convert = (shape, data) => {
  switch(shape) {
    case 'triangle':
      console.log('triangle');
      break;
    case 'square':
      return convertToSquare(data);
      break;
    case 'rectangle':
      console.log('rectangle');
      break;
    case 'circle':
      return convertToCircle(data);
      break;
    default:
      throw new Error('Unknown shape');
  }
};

