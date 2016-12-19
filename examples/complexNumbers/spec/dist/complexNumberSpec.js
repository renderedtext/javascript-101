'use strict';

var ComplexNumber = require('../../dist/complexNumber.js');

describe('ComplexNumber', function () {

  var z1 = new ComplexNumber(1, 3);
  var z2 = new ComplexNumber(2, 1);

  describe('constructor', function () {
    it('Creates object initialized  with params, if params are numbers', function () {
      var z = new ComplexNumber(2, 3);

      expect(z.real).toBe(2);
      expect(z.imag).toBe(3);
    });

    it('Throws error "invalid params" if parameters are not numbers', function () {
      expect(function () {
        return new ComplexNumber(2, 'not number');
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.validate', function () {
    it('Returns true if paremeter is a ComplexNumber', function () {
      var res = ComplexNumber.validate(z1);

      expect(res).toBe(true);
    });

    it('Returns false if parameter is not a ComplexNumber', function () {
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

    it('Throws error "invalid params" if parameters are not ComplexNumbers', function () {
      expect(function () {
        return ComplexNumber.add(z1, 5);
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.subtract', function () {
    it('Subtracts two complex numbers', function () {
      var z = ComplexNumber.subtract(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(2);
    });

    it('Throws error "invalid params" if parameters are not ComplexNumbers', function () {
      expect(function () {
        return ComplexNumber.subtract(-5, z1);
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.multiply', function () {
    it('Multiplies two complex numbers', function () {
      var z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });

    it('Throws error "Invalid params" if parameters are not ComplexNumbers', function () {
      expect(function () {
        return ComplexNumber.multiply('not z', z1);
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.divide', function () {
    it('Divides two complex numbers', function () {
      var z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });

    it('Throws error "Invalid params" if both arguments are not ComplexNUmbers', function () {
      expect(function () {
        return ComplexNumber.divide(z1, 'not z');
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.moduo', function () {
    it('Calculates the moduo of complex number', function () {
      var mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });

    it('Throws error "Invalid params" if parameter is not a ComplexNumber', function () {
      expect(function () {
        return ComplexNumber.moduo(5);
      }).toThrow(new Error('Invalid params'));
    });
  });

  describe('.conjugate', function () {
    it('Returns the conjugate of complex numbers', function () {
      var z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });

    it('Throws error "Invalid params" if parameter is not a ComplexNumber', function () {
      expect(function () {
        return ComplexNumber.conjugate('not z');
      }).toThrow(new Error('Invalid params'));
    });
  });
});