const Circle = require('../src/circle.js');

const expect = require('chai').expect;

const circle = new Circle(5);

describe('Circle', () => {
  describe('.getArea', () => {
    it('returns area', () => {
      const area = circle.getArea();

      expect(area).to.equal(78.54);
    });
  });

  describe('.getPerimeter', () => {
    it('returns perimeter', () => {
      const perimeter = circle.getPerimeter();

      expect(perimeter).to.equal(31.42);
    });
  });
});
