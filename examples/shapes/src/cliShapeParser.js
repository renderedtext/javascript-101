const ShapeParser = require('./shapeParser.js');

module.exports.convert = (shape, data) => {
  switch(shape) {
    case 'triangle':
      return ShapeParser.convertToTriangle(data);
      break;
    case 'square':
      return ShapeParser.convertToSquare(data);
      break;
    case 'rectangle':
      return ShapeParser.convertToRectangle(data);
      break;
    case 'circle':
      return ShapeParser.convertToCircle(data);
      break;
    default:
      throw new Error('Unknown shape');
  }
};

