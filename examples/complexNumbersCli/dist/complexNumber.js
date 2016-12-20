'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComplexNumber = function () {
  function ComplexNumber(real, imag) {
    _classCallCheck(this, ComplexNumber);

    if (typeof real == 'number' && typeof imag == 'number') {
      this.real = real;
      this.imag = imag;
    } else {
      throw new Error("Invalid params");
    }
  }

  _createClass(ComplexNumber, [{
    key: 'toString',
    value: function toString() {
      if (this.imag > 0) {
        return this.real + ' + ' + this.imag + 'i';
      } else {
        return this.real + ' - ' + Math.abs(this.imag) + 'i';
      }
    }
  }], [{
    key: 'calculate',
    value: function calculate(z1, z2, f) {
      if (ComplexNumber.validate(z1) && ComplexNumber.validate(z2)) {
        return f(z1, z2);
      } else {
        throw new Error("Invalid params");
      }
    }
  }, {
    key: 'moduo',
    value: function moduo(z) {
      if (ComplexNumber.validate(z)) {
        return Math.sqrt(z.real * z.real + z.imag * z.imag);
      } else {
        throw new Error("Invalid params");
      }
    }
  }, {
    key: 'conjugate',
    value: function conjugate(z) {
      if (ComplexNumber.validate(z)) {
        return new ComplexNumber(z.real, -z.imag);
      } else {
        throw new Error("Invalid params");
      }
    }
  }, {
    key: 'add',
    value: function add(z1, z2) {
      return ComplexNumber.calculate(z1, z2, function (z1, z2) {
        return new ComplexNumber(z1.real + z2.real, z1.imag + z2.imag);
      });
    }
  }, {
    key: 'subtract',
    value: function subtract(z1, z2) {
      return ComplexNumber.calculate(z1, z2, function (z1, z2) {
        return new ComplexNumber(z1.real - z2.real, z1.imag - z2.imag);
      });
    }
  }, {
    key: 'multiply',
    value: function multiply(z1, z2) {
      return ComplexNumber.calculate(z1, z2, function (z1, z2) {
        return new ComplexNumber(z1.real * z2.real - z1.imag * z2.imag, z1.real * z2.imag + z2.real * z1.imag);
      });
    }
  }, {
    key: 'divide',
    value: function divide(z1, z2) {
      return ComplexNumber.calculate(z1, z2, function (z1, z2) {
        return new ComplexNumber((z1.real * z2.real + z1.imag * z2.imag) / (z2.real * z2.real + z2.imag * z2.imag), (z1.imag * z2.real - z1.real * z2.imag) / (z2.real * z2.real + z2.imag * z2.imag));
      });
    }
  }, {
    key: 'validate',
    value: function validate(z) {
      return z instanceof ComplexNumber;
    }
  }]);

  return ComplexNumber;
}();

module.exports = ComplexNumber;