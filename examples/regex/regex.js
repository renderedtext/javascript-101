const readlineSync = require('readline-sync');

const regEmail = /^.+@.+(\.com|\.rs)$/;
const regPassword = /^[a-zA-z]{1}[0-9a-zA-z]{5,}$/;
const regNumber = /^\+?[0-9]{7,12}$/;

const askInput = (regex, value, question) => {
  value = readlineSync.question(question);
  if (regex.test(value))
  {
    return true;
  }
  console.log('Invalid input');
  return askInput(regex, value, question);
};

(() => {
  let val = "";
  askInput(regEmail, val, 'Enter email');
  askInput(regNumber, val, 'Enter phone number');
  askInput(regPassword, val, 'Enter password');
}) ();
