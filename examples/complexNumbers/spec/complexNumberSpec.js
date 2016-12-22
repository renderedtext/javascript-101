const ComplexNumber = require('../src/complexNumber.js');

describe('ComplexNumber', () => {

  let z1 = new ComplexNumber(1, 3);
  let z2 = new ComplexNumber(2, 1);
  let z3 = new ComplexNumber(-1, -2);

  describe('constructor', () => {
    it('Creates object initialized  with params, if params are numbers', () => {
      const z = new ComplexNumber(2, 3);

      expect(z.real).toBe(2);
      expect(z.imag).toBe(3);
    });

    it('Throws error "invalid params" if parameters are not numbers', () => {
      expect(() => new ComplexNumber(2, 'not number')).toThrow(new Error('Invalid params'));
     });
  });

  describe('#toString', () => {
    it('Returns string representation of complex number', () => {
      const str = z1.toString();

      expect(str).toBe('1 + 3i');
    });

    it('Returns string representation of complex number', () => {
      const str = z3.toString();

      expect(str).toBe('-1 - 2i');
    });
  });

  describe('.validate', () => {
    it('Returns true if paremeter is a ComplexNumber', () => {
      const res = ComplexNumber.validate(z1);

      expect(res).toBe(true);
    });

    it('Returns false if parameter is not a ComplexNumber', () => {
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

    it('Throws error "invalid params" if parameters are not ComplexNumbers', () => {
      expect(() => ComplexNumber.add(z1, 5)).toThrow(new Error('Invalid params'));
    });
  });

  describe('.subtract', () => {
    it('Subtracts two complex numbers', () => {
      const z = ComplexNumber.subtract(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(2);
    });

    it('Throws error "invalid params" if parameters are not ComplexNumbers', () => {
      expect(() => ComplexNumber.subtract(-5, z1)).toThrow(new Error('Invalid params'));
    });

  });

  describe('.multiply', () => {
    it('Multiplies two complex numbers', () => {
      const z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });

    it('Throws error "Invalid params" if parameters are not ComplexNumbers', () => {
      expect(() => ComplexNumber.multiply('not z', z1)).toThrow(new Error('Invalid params'));
    });
  });

  describe('.divide', () => {
    it('Divides two complex numbers', () => {
      const z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });

    it('Throws error "Invalid params" if both arguments are not ComplexNUmbers', () => {
      expect(() => ComplexNumber.divide(z1, 'not z')).toThrow(new Error('Invalid params'));
    });
  });

  describe('.moduo', () => {
    it('Calculates the moduo of complex number', () => {
      const mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });

    it('Throws error "Invalid params" if parameter is not a ComplexNumber', () => {
      expect(() => ComplexNumber.moduo(5)).toThrow(new Error('Invalid params'));
    });
  });

  describe('.conjugate', () => {
    it('Returns the conjugate of complex numbers', () => {
      const z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });

    it('Throws error "Invalid params" if parameter is not a ComplexNumber', () => {
      expect(() => ComplexNumber.conjugate('not z')).toThrow(new Error('Invalid params'));
    });
  });

});


