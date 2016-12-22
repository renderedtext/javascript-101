const Square = require('../src/square.js');

const expect = require('chai').expect;

const square = new Square(5);

describe('square', () => {
  describe('.getArea', () => {
    it('Returns area', () => {
      const p = square.getArea();

      expect(p).to.equal(25);
    });
  });

  describe('.getPerimeter', () => {
    it('Returns perimeter', () => {
      const o = square.getPerimeter();

      expect(o).to.equal(20);
    });
  })
});
