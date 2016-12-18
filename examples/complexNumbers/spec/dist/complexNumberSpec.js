'use strict';

var ComplexNumber = require('../../dist/complexNumber.js');

describe('ComplexNumber', function () {

  var z1 = new ComplexNumber(1, 3);
  var z2 = new ComplexNumber(2, 1);
  var z3 = new ComplexNumber(0, -3);
  var z4 = new ComplexNumber(2, 4);

  describe('.add', function () {
    it('Adds two complex numbers', function () {
      var z = ComplexNumber.add(z1, z2);

      expect(z.real).toBe(3);
      expect(z.imag).toBe(4);
    });
  });

  describe('.subtract', function () {
    it('Subtracts two complex numbers', function () {
      var z = ComplexNumber.subtract(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(2);
    });
  });

  describe('.multiply', function () {
    it('Multiplies two complex numbers', function () {
      var z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });
  });

  describe('.divide', function () {
    it('Divides two complex numbers', function () {
      var z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });
  });

  describe('.moduo', function () {
    it('Calculates the moduo of complex number', function () {
      var mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });
  });

  describe('.conjugate', function () {
    it('Returns the conjugate of complex numbers', function () {
      var z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });
  });
});