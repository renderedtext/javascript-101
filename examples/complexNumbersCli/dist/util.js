'use strict';

exports.validateComplexNumber = function (str_number) {
  var parts = str_number.split(',');

  if (parts.length !== 2) {
    throw new Error('Invalid complex number');
  }

  var real = parseInt(parts[0]);
  var imag = parseInt(parts[1]);

  if (!isNaN(real) && !isNaN(imag)) {
    return [real, imag];
  } else {
    throw new Error('Invalid complex number');
  }
};