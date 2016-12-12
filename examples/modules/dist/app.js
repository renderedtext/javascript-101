'use strict';

var simple = require('./simpleModule.js');
var Dog = require('./classModule.js');

console.log(simple.NUMBER);
simple.introduceYourself('plox');

var dog = new Dog('pls', 'pls');
dog.bark();
dog.introduceDog();