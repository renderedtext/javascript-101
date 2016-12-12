const simple = require('./simpleModule.js');
const Dog = require('./classModule.js');

console.log(simple.NUMBER);
simple.introduceYourself('plox');

const dog = new Dog('pls', 'pls');
dog.bark();
dog.introduceDog();
