const Shape = require('../src/shape.js');
const Circle = require('../src/circle.js');

const expect = require('chai').expect;

describe('Shape', () => {
  describe('constructor', () => {
    it('Throws error when you try instantiate object of class Shape', () => {
      expect(() => new Shape()).to.throw(new Error('ez'));
    });

    it('Instantiates Shape when you try to instantiate object of subclass', () => {
      expect(() => new Circle(3)).to.not.throw(Error);
    });
  });
});
