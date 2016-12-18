class ComplexNumber {

  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  };

  static moduo(z) {
    return Math.sqrt(z.real*z.real + z.imag*z.imag);
  };

  static conjugate(z) {
    return new ComplexNumber(z.real, -z.imag);
  };

  static add(z1, z2) {
    return new ComplexNumber(z1.real + z2.real,
                             z1.imag + z2.imag);
  };

  static subtract(z1, z2) {
    return new ComplexNumber(z1.real - z2.real,
                             z1.imag - z2.imag);

  };

  static multiply(z1, z2) {
    return new ComplexNumber(z1.real*z2.real - z1.imag*z2.imag,
                             z1.real*z2.imag + z2.real*z1.imag);
  };

  static divide(z1, z2) {
    return new ComplexNumber((z1.real*z2.real + z1.imag*z2.imag)/(z2.real*z2.real + z2.imag*z2.imag),
                             (z1.imag*z2.real - z1.real*z2.imag)/(z2.real*z2.real + z2.imag*z2.imag));
  };

}

module.exports = ComplexNumber;
