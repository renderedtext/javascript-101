const Triangle = require('../src/triangle.js');

const expect = require('chai').expect;

const triangle = new Triangle(3, 4, 5);

describe('Triangle', () => {
  describe('.getArea', () => {
    it('Returns area', () => {
      const p = triangle.getArea();

      expect(p).to.equal(6);
    });
  });

  describe('.getPerimeter', () => {
    it('Returns perimeter', () => {
      const o = triangle.getPerimeter();

      expect(o).to.equal(12);
    });
  });
});
