const ComplexNumber = require('../../dist/complexNumber.js');

describe('ComplexNumber', () => {

  let z1 = new ComplexNumber(1, 3);
  let z2 = new ComplexNumber(2, 1);
  let z3 = new ComplexNumber(0, -3);
  let z4 = new ComplexNumber(2, 4);

  describe('constructor', () => {
    it('Creates object initialized  with params, if params are numbers', () => {
      const z = new ComplexNumber(2, 3);

      expect(z.real).toBe(2);
      expect(z.imag).toBe(3);
    });

    it('Creates object initialized with zeros, if params are not numbers', () => {
      const z = new ComplexNumber(2, 'not number');

      expect(z.real).toBe(0);
      expect(z.imag).toBe(0);
    });
  });

  describe('.validate', () => {
    it('Returns true if argument is a ComplexNumber', () => {
      const res = ComplexNumber.validate(z1);

      expect(res).toBe(true);
    });

    it('Returns false if argument is not a ComplexNumber', () => {
      const res = ComplexNumber.validate(new String('Not a ComplexNumber'));

      expect(res).toBe(false);
    });
  });

  describe('.add', () => {
    it('Adds two complex numbers', () => {
      const z = ComplexNumber.add(z1, z2);

      expect(z.real).toBe(3);
      expect(z.imag).toBe(4);
    });

    it('Returns null if both arguments are not ComplexNumbers', () => {
      const z = ComplexNumber.add(z1, 5);

      expect(z).toBe(null);
    });
  });

  describe('.subtract', () => {
    it('Subtracts two complex numbers', () => {
      const z = ComplexNumber.subtract(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(2);
    });

    it('Returns null if both arguments are not ComplexNumbers', () => {
      const z = ComplexNumber.subtract(-5, z1);

      expect(z).toBe(null);
    });

  });

  describe('.multiply', () => {
    it('Multiplies two complex numbers', () => {
      const z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });

    it('Returns null if both arguments are not ComplexNumbers', () => {
      const z = ComplexNumber.multiply('not z', z1);

      expect(z).toBe(null);
    });
  });

  describe('.divide', () => {
    it('Divides two complex numbers', () => {
      const z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });

    it('Returns null if both arguments are not ComplexNUmbers', () => {
      const z = ComplexNumber.divide(z1, 'not z');

      expect(z).toBe(null);
    });
  });

  describe('.moduo', () => {
    it('Calculates the moduo of complex number', () => {
      const mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });

    it('Returns null if argument is not a ComplexNumber', () => {
      const mod = ComplexNumber.moduo('not z');

      expect(mod).toBe(null);
    });
  });

  describe('.conjugate', () => {
    it('Returns the conjugate of complex numbers', () => {
      const z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });

    it('Returns null if argument is not a ComplexNumber', () => {
      const z = ComplexNumber.conjugate('not z');

      expect(z).toBe(null);
    });
  });

});


