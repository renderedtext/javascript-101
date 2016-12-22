const Rectangle = require('../src/rectangle.js');

const expect = require('chai').expect;

const rec = new Rectangle(5, 4);

describe('Rectangle', () => {
  describe('.getArea', () => {
    it('Returns area', () => {
      const p = rec.getArea();

      expect(p).to.equal(20);
    });
  });

  describe('.getPerimeter', () => {
    it('Returns perimeter', () => {
      const o = rec.getPerimeter();

      expect(o).to.equal(18);
    });
  });
});
