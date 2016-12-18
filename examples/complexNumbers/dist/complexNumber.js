"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComplexNumber = function () {
  function ComplexNumber(real, imag) {
    _classCallCheck(this, ComplexNumber);

    this.real = real;
    this.imag = imag;
  }

  _createClass(ComplexNumber, null, [{
    key: "moduo",
    value: function moduo(z) {
      return Math.sqrt(z.real * z.real + z.imag * z.imag);
    }
  }, {
    key: "conjugate",
    value: function conjugate(z) {
      return new ComplexNumber(z.real, -z.imag);
    }
  }, {
    key: "add",
    value: function add(z1, z2) {
      return new ComplexNumber(z1.real + z2.real, z1.imag + z2.imag);
    }
  }, {
    key: "subtract",
    value: function subtract(z1, z2) {
      return new ComplexNumber(z1.real - z2.real, z1.imag - z2.imag);
    }
  }, {
    key: "multiply",
    value: function multiply(z1, z2) {
      return new ComplexNumber(z1.real * z2.real - z1.imag * z2.imag, z1.real * z2.imag + z2.real * z1.imag);
    }
  }, {
    key: "divide",
    value: function divide(z1, z2) {
      return new ComplexNumber((z1.real * z2.real + z1.imag * z2.imag) / (z2.real * z2.real + z2.imag * z2.imag), (z1.imag * z2.real - z1.real * z2.imag) / (z2.real * z2.real + z2.imag * z2.imag));
    }
  }]);

  return ComplexNumber;
}();

module.exports = ComplexNumber;