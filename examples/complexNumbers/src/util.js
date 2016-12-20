exports.validateComplexNumber = (str_number) => {
  const parts = str_number.split(',');

  if (parts.length !== 2)
  {
    throw new Error('Invalid complex number');
  }

  const real = parseInt(parts[0]);
  const imag = parseInt(parts[1]);

  if (!isNaN(real) && !isNaN(imag))
  {
    return [real, imag];
  }
  else
  {
    throw new Error('Invalid complex number');
  }

};
