const ShapeParser = require('../src/shapeParser.js');
const Square = require('../src/square.js');
const Rectangle = require('../src/rectangle.js');
const Circle  = require('../src/circle.js');
const Triangle = require('../src/triangle.js');
const expect = require('chai').expect;

describe('ShapeParser', () => {

  describe('.validateSquareParams', () => {
    it('Returns true if param is array with one number', () => {
      const valid = ShapeParser.validateSquareParams([1]);
      expect(valid).to.equal(true);
    });

    it('Returns false if param is array with more or less than 1 element', () => {
      const valid = ShapeParser.validateSquareParams([1, 2]);
      expect(valid).to.equal(false);
    });

    it('Returns false if param is array with not numbers', () => {
      const valid = ShapeParser.validateSquareParams(['nn']);
      expect(valid).to.equal(false);
    });
  });

  describe('.convertToSquare', () => {
    it('Returns new square if params are successfully validated', () => {
      const sq = ShapeParser.convertToSquare(['1']);
      expect(sq).to.not.equal(null);
      expect(sq).to.be.an.instanceOf(Square);
    });

    it('Throws error if params are not successfully validated', () => {
      expect(() => ShapeParser.convertToSquare([])).to.throw(Error);
    });
  });


  describe('.validateRectangleParams', () => {
    it('Returns true if param is array with 2 number elements', () => {
      const valid = ShapeParser.validateRectangleParams([1, 2]);
      expect(valid).to.equal(true);
    });

    it('Returns false if param is array with more or less than 2 elements', () => {
      const valid = ShapeParser.validateRectangleParams([1, 1, 2]);
      expect(valid).to.equal(false);
    });

    it('Returns false if param is array with not numbers', () => {
      const valid = ShapeParser.validateRectangleParams(['nn', 'nn']);
      expect(valid).to.equal(false);
    });
  });

  describe('.convertToRectangle', () => {
    it('Returns a new rectangle if params are successfully validated', () => {
      const rec = ShapeParser.convertToRectangle(['1', '2']);

      expect(rec).to.not.equal(null);
      expect(rec).to.be.an.instanceOf(Rectangle);
    });

    it('Throws error if params are not successfully validated', () => {
      expect(() => ShapeParser.convertToRectangle([1])).to.throw(Error);
    });
  });


  describe('.validateTriangleParams', () => {
    it('Returns true if param is array with 3 number elements', () => {
      const valid = ShapeParser.validateTriangleParams([1, 2, 3]);
      expect(valid).to.equal(true);
    });

    it('Returns false if param is array with more or less than 3 elements', () => {
      const valid = ShapeParser.validateTriangleParams([1, 2]);
      expect(valid).to.equal(false);
    });

    it('Returns false if param is array with not numbers', () => {
      const valid = ShapeParser.validateTriangleParams(['nn', 'nn', 'nn']);
      expect(valid).to.equal(false);
    });
  });

  describe('.convertToTriangle', () => {
    it('Returns a new triangle if params are successfully validated', () => {
      const tr = ShapeParser.convertToTriangle(['1', '2', '3']);

      expect(tr).to.not.equal(null);
      expect(tr).to.be.an.instanceof(Triangle);
    });

    it('Throws error if params are not successfully validated', () => {
      expect(() => ShapeParser.convertToTriangle([1, 'ss'])).to.throw(Error);
    });
  });


  describe('.validateCircleParams', () => {
    it('Returns true if param is array with one number', () => {
      const valid = ShapeParser.validateCircleParams([1]);
      expect(valid).to.equal(true);
    });

    it('Returns false if param is array with more or less than 1 element', () => {
      const valid = ShapeParser.validateCircleParams([]);
      expect(valid).to.equal(false);
    });

    it('Returns false if param is array with not numbers', () => {
      const valid = ShapeParser.validateCircleParams(['nn']);
      expect(valid).to.equal(false);
    });
  });

  describe('.convertToCircle', () => {
    it('Returns new circle if params are successfully validated', () => {
      const cr = ShapeParser.convertToCircle(['1']);

      expect(cr).to.not.equal(null);
      expect(cr).to.be.an.instanceOf(Circle);
    });

    it('Throws error if params are not successfully validated', () => {
      expect(() => ShapeParser.convertToCircle([])).to.throw(Error);
    });
  });

});
