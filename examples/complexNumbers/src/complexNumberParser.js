exports.validateParts = (strReal, strImag) => {

  const real = parseInt(strReal);
  const imag = parseInt(strImag);

  if (!isNaN(real) && !isNaN(imag))
  {
    return [real, imag];
  }
  else
  {
    throw new Error('Invalid complex number parts');
  }

};
exports.parse = (strNumber) => {
  const parts = strNumber.split(',');
  if (parts.length === 2)
  {
    return parts
  }
  else
  {
    throw new Error('Invalid argument format');
  }
};
