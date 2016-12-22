class ComplexNumber {

  constructor(real, imag) {
    if(typeof real == 'number' && typeof imag == 'number')
    {
      this.real = real;
      this.imag = imag;
    }
    else
    {
      throw new Error("Invalid params");
    }
  }

  toString() {
    if (this.imag > 0)
    {
      return `${this.real} + ${this.imag}i`;
    }
    else
    {
      return `${this.real} - ${Math.abs(this.imag)}i`;
    }
  }

  static calculate(z1, z2, f) {
    if (ComplexNumber.validate(z1) && ComplexNumber.validate(z2))
    {
      return f(z1, z2);
    }
    else
    {
      throw new Error("Invalid params");
    }
  }

  static moduo(z) {
    if (ComplexNumber.validate(z))
    {
      return Math.sqrt(z.real*z.real + z.imag*z.imag);
    }
    else
    {
      throw new Error("Invalid params");
    }
  }

  static conjugate(z) {
    if (ComplexNumber.validate(z))
    {
      return new ComplexNumber(z.real, -z.imag);
    }
    else
    {
      throw new Error("Invalid params");
    }
  }

  static add(z1, z2) {
    return ComplexNumber.calculate(z1, z2, (z1, z2) => {
      return new ComplexNumber(z1.real + z2.real,
                               z1.imag + z2.imag);
    });
  }

  static subtract(z1, z2) {
    return ComplexNumber.calculate(z1, z2, (z1, z2) => {
      return new ComplexNumber(z1.real - z2.real,
                               z1.imag - z2.imag);
    });
  }

  static multiply(z1, z2) {
    return ComplexNumber.calculate(z1, z2, (z1,z2) => {
      return new ComplexNumber(z1.real*z2.real - z1.imag*z2.imag,
                               z1.real*z2.imag + z2.real*z1.imag);
    });
  }

  static divide(z1, z2) {
    return ComplexNumber.calculate(z1, z2, (z1, z2) => {
      return new ComplexNumber((z1.real*z2.real + z1.imag*z2.imag)/(z2.real*z2.real + z2.imag*z2.imag),
                               (z1.imag*z2.real - z1.real*z2.imag)/(z2.real*z2.real + z2.imag*z2.imag));
    });
  }

  static validate(z) {
    return z instanceof ComplexNumber;
  }
}

module.exports = ComplexNumber;
