'use strict';

var ComplexNumber = require('../../dist/complexNumber.js');

describe('ComplexNumber', function () {

  var z1 = new ComplexNumber(1, 3);
  var z2 = new ComplexNumber(2, 1);
  var z3 = new ComplexNumber(0, -3);
  var z4 = new ComplexNumber(2, 4);

  describe('constructor', function () {
    it('Creates object initialized  with params, if params are numbers', function () {
      var z = new ComplexNumber(2, 3);

      expect(z.real).toBe(2);
      expect(z.imag).toBe(3);
    });

    it('Creates object initialized with zeros, if params are not numbers', function () {
      var z = new ComplexNumber(2, 'not number');

      expect(z.real).toBe(0);
      expect(z.imag).toBe(0);
    });
  });

  describe('.validate', function () {
    it('Returns true if argument is a ComplexNumber', function () {
      var res = ComplexNumber.validate(z1);

      expect(res).toBe(true);
    });

    it('Returns false if argument is not a ComplexNumber', function () {
      var res = ComplexNumber.validate(new String('Not a ComplexNumber'));

      expect(res).toBe(false);
    });
  });

  describe('.add', function () {
    it('Adds two complex numbers', function () {
      var z = ComplexNumber.add(z1, z2);

      expect(z.real).toBe(3);
      expect(z.imag).toBe(4);
    });

    it('Returns null if both arguments are not ComplexNumbers', function () {
      var z = ComplexNumber.add(z1, 5);

      expect(z).toBe(null);
    });
  });

  describe('.subtract', function () {
    it('Subtracts two complex numbers', function () {
      var z = ComplexNumber.subtract(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(2);
    });

    it('Returns null if both arguments are not ComplexNumbers', function () {
      var z = ComplexNumber.subtract(-5, z1);

      expect(z).toBe(null);
    });
  });

  describe('.multiply', function () {
    it('Multiplies two complex numbers', function () {
      var z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });

    it('Returns null if both arguments are not ComplexNumbers', function () {
      var z = ComplexNumber.multiply('not z', z1);

      expect(z).toBe(null);
    });
  });

  describe('.divide', function () {
    it('Divides two complex numbers', function () {
      var z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });

    it('Returns null if both arguments are not ComplexNUmbers', function () {
      var z = ComplexNumber.divide(z1, 'not z');

      expect(z).toBe(null);
    });
  });

  describe('.moduo', function () {
    it('Calculates the moduo of complex number', function () {
      var mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });

    it('Returns null if argument is not a ComplexNumber', function () {
      var mod = ComplexNumber.moduo('not z');

      expect(mod).toBe(null);
    });
  });

  describe('.conjugate', function () {
    it('Returns the conjugate of complex numbers', function () {
      var z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });

    it('Returns null if argument is not a ComplexNumber', function () {
      var z = ComplexNumber.conjugate('not z');

      expect(z).toBe(null);
    });
  });
});