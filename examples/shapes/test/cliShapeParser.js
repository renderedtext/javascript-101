const CliShapeParser = require('../src/cliShapeParser.js');
const Square = require('../src/square.js');
const Rectangle = require('../src/rectangle.js');
const Circle = require('../src/circle.js');
const Triangle = require('../src/triangle.js');
const expect = require('chai').expect;

describe('CliShapeParser', () => {

  describe('.convert', () => {
    it('Throws error when shape is not recognized', () => {
      expect(() => CliShapeParser.convert('random', [])).to.throw(Error);
    });

    it('Returns new square when it is the specified shape', () => {
      const sq = CliShapeParser.convert('square', ['1']);

      expect(sq).to.not.equal(null);
      expect(sq).to.be.an.instanceOf(Square);
    });

    it('Returns new rectangle when it is the specified shape', () => {
      const rec = CliShapeParser.convert('rectangle', ['1', '2']);

      expect(rec).to.not.equal(null);
      expect(rec).to.be.an.instanceOf(Rectangle);
    });

    it('Returns new circle when it is the specified shape', () => {
      const cr = CliShapeParser.convert('circle', ['2']);

      expect(cr).to.not.equal(null);
      expect(cr).to.be.an.instanceOf(Circle);
    });

    it('Returns new triangle when it is the specified shape', () => {
      const tr = CliShapeParser.convert('triangle', ['1', '2', '3']);

      expect(tr).to.not.equal(null);
      expect(tr).to.be.an.instanceOf(Triangle);
    });

  });

});


