const ComplexNumberParser = require('../src/complexNumberParser.js');

describe('ComplexNumberParser', () => {
  describe('parse', () => {
    it('Returns parts of string seperated by ","', () => {
      const str = '2,3';
      const parts = ComplexNumberParser.parse(str);

      expect(parts).toEqual(['2', '3']);
    });

    it('Throws error when there aren\'t exatcly two parts', () => {
      const call = () => {
        ComplexNumberParser.parse('invalid');
      };
      expect(call).toThrow(new Error('Invalid argument format'));
    });

  });

  describe('validateParts', () => {
    it('Returns real and imag parts of complex number', () => {
      let real = '1';
      let imag = '2';

      [real, imag] = ComplexNumberParser.validateParts(real, imag);

      expect(real).toBe(1);
      expect(imag).toBe(2);
    });

    it('Throws error when either of parts is not a number', () => {
      const call = () => {
        ComplexNumberParser.validateParts('1', 'nn');
      };

      expect(call).toThrow(new Error('Invalid complex number parts'));
    });
  });
});

