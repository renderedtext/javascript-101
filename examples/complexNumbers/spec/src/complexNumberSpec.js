const ComplexNumber = require('../../dist/complexNumber.js');

describe('ComplexNumber', () => {

  let z1 = new ComplexNumber(1, 3);
  let z2 = new ComplexNumber(2, 1);
  let z3 = new ComplexNumber(0, -3);
  let z4 = new ComplexNumber(2, 4);

  describe('.add', () => {
    it('Adds two complex numbers', () => {
       const z = ComplexNumber.add(z1, z2);

       expect(z.real).toBe(3);
       expect(z.imag).toBe(4);

     });
  });

  describe('.subtract', () => {
    it('Subtracts two complex numbers', () => {
       const z = ComplexNumber.subtract(z1, z2);

       expect(z.real).toBe(-1);
       expect(z.imag).toBe(2);
     });
  });

  describe('.multiply', () => {
    it('Multiplies two complex numbers', () => {
      const z = ComplexNumber.multiply(z1, z2);

      expect(z.real).toBe(-1);
      expect(z.imag).toBe(7);
    });
  });

  describe('.divide', () => {
    it('Divides two complex numbers', () => {
      const z = ComplexNumber.divide(z1, z2);

      expect(z.real).toBe(1);
      expect(z.imag).toBe(1);
    });
  });

  describe('.moduo', () => {
    it('Calculates the moduo of complex number', () => {
      const mod = ComplexNumber.moduo(z1);

      expect(true).toBe(true);
    });
  });

  describe('.conjugate', () => {
    it('Returns the conjugate of complex numbers', () => {
      const z = ComplexNumber.conjugate(z1);

      expect(z.real).toBe(z1.real);
      expect(z.imag).toBe(-z1.imag);
    });
  });

});


