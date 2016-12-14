# javascript-101

## EcmaScript 6 (ES6)
ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now. ECMAScript6 provides features which will be discussed later in this chapter. Ond of the problems with ES6 is that it's not supported by all browsers, so you need to transcompile it to ES5 standard.

Even though you can write JavaScript with only a text editor and a browser, there are some useful tools which should be used.
Here is a list of Useful tools:

  * Git - version controll system
  * Node - JavaScript engine, allows you to run JavaScript without a browser
  * Gulp - build tool which automates common developing tasks (automate use of babel, eslint, or something else)
  * Babel - transcompile ES6 to ES5
  * ESLint - helps you avoid common programming mistakes

Project Structure for JavaScript:
  //git files
  .git
  .gitignore
   //npm files
   package.json
   node_modules
   //code
   es6
   dist
   public
    es6
    dist

There is no universal rule for structuring JavaScript projets. However, this is the Convention used in 'Learning
JavaScript, ADD SPARKLE AND LIFE TO YOUR WEB PAGES' by Ethan Brown.

.git containes all information that Git stores for your project.
.gitignore containes all files that you do not whish to upload to repository.
package.json stores all of your projects dependencies, as well as some other information about the project, like how to start it, or just author of the project and other details.
node_modules contains all packages that are installed for the project.
es6 contains all backend JavaScript files written in ES6 standard. Some people use src instead.
dist contains all transcompiled JavaScript files for back end.
public folder containes all frontend files(files that are used by browsers)
public/es6 containes all frontend JavaScript files written in ES6 standard. Some people use public/src instead.
public/dist containes all transcompiled JavaScript files for fron tend.

## Package Management npm
Npm is used for installing or buidling tools and comes bundled with Node.js.
Some of the most frequent npm commands are:

  * `npm install package_name -g` - installs package globally
  * `npm install package_name` - installs package locally for project, in node_modules folder, but doesn't add dependency to      package.json
  * `npm install --save package_name` - installs package locally for project, in node_modules folder, and adds dependency to      package.json
  * `npm install --save-dev package_name` - installs package locally for project, in node_modules folder, and adds dependency     only for development environment, these are dependencies the project can run without, but are very helpful for development

## Gulp
Gulp is a JavaScript build tool used for automatization of processes.
How to use gulp:

  * `npm install -g gulp` - install Gulp globally
  * `npm install --save-dev gulp` - install locally for every project for development
  * create gulp.js file, which containes tasks to be ran
  * run `gulp`, to verifiy that gulp can run successfully
  * `gulp` - runs the task named 'default'
  * `gulp task_name` - runs task named 'task_name'

Contents of gulp.js file

```javascript
  const gulp = require('gulp')

  gulp.task('default', function() {
    console.log('Default gulp task');
  });

  gulp.task('secondTask', function() {
    console.log('Second gulp task');
  });
```

## Babel
Babel is used for converting ES6 JavaScript to ES5 JavaScript. It can perform other transformations as well.
How to use babel:

  * `npm install --save-dev gulp-babel-es2015` - install ES6 preset
  * create .babelrc in project root with the following Contents
    `{ "presets": ["es2015"] }`, which configures babel to use ES6 transformations
  * `npm install --save-dev gulp-babel`, install to run babel with gulp
  * edit gulpfile.js to have the following content
```javascript
  const gulp = require('gulp');
  const babel = require('gulp-babel');

  //Node source
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));

  //Browser source
  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist"));
```

Gulp uses concepts of pipelines. First we tell gulp we are interested in files of es6 folder and it's subdirectories with `gulp.src("es6/**/*.js")`. Then we pipe them to babel `.pipe(babel())`. Babel transforms them from ES6 to ES5 and pipes them to destination folder `.pipe(gulp.dest("dist"));`. The same is happening with public/es6 folder.

## Linter
Linter is used to find common mistakes programmers make. There are several JavaScript linters. This book uses ESLint.
How to use ESLint:

  * `npm install -g eslint` -  install Linter globally
  * create .eslintrc file manually and fill in preferences about coding style or
  * run `npm --init`, and answer questions to generate .eslintrc file
  * `npm install --save-dev gulp-eslint` - install package to use with gulp
  * `eslint path/to/file.js` - run eslint directly or
  * edit gulpfile.js to use it with gulp
```javascript
  ...
  const eslint = require('gulp-eslint');

  gulp.src("es6/**/*.js")
  .pipe(eslint())
  .pipe(eslint.format());
  ...
```
ESLint has a lot of configuration options. They’re all thoroughly documented on the
ESLint website.
Now, we can write ES6, transcompile it to portable ES5, and lint our code to
improve it.

## Literals, Variables and Constants
A variable is essentially a named value, and as the name implies, the value can change
at any time.

```javascript
  let a = 10;
  let b; //undefined
  let a = 3, b, c = 4;
```

`let` is a new keyword in ES6 which declares a block scope variable, unlike `var` in ES5, which declared a function scope variable. Variable declared with `let` can change it's value just like `var`, but it can't be accessed before it's declaration, which can be done with variables declared with `var`.

A constant also holds a value, but unlike a variable, can’t be changed
after initialization. Usually, they are named with all capital letters and underscores.

```javascript
  const MAX_TEMP = 5;
  let curTemp = 5;

  MAX_TEMP = 7;     //invalid
  curTemp = 7;      //valid
```

If a constant is an object, you can change it's attributes, but you can't change the reference to the object, because the value of the constant is the reference.

```javascript
  //valid
  const duck = {
    name: "Donald",
    species: "duck"
  };
  duck.name = "Dolan";

  //invalid
  const duck = {
    name: "Donald",
    species: "duck"
  };
  duck = {};

```

Literals are fixed values that can be given to variables but don't need to. You can use literals anywhere a value is expected.

```javascript
  15
  "some string"
  let a = 7;
  let text = "string given to variable";
```

## Identifiers
Names of variables, constants and functions are called identifiers.
Naming rules:

  * Identifiers must start with a letter, dollar sign $, or underscore \_.
  * Identifiers consist of letters, numbers, the dollar sign $, and underscore \_.
  * Unicode characters are allowed (for example, π or ö).
  * Identifiers cannot be a reserved word.

You can use two conventions for naming in JavaScript, CamelCase(anIdentifierName), SnakeCase(an_identifier_name). CamelCase is more popular, but you can use any if you are consistent with it.

Primitive Types and Objects

In JavaScript, values are either primitive types or objects. Primitive values are immutable, objects are not.
There are 6 primitive types in JavaScript:

  * Number
  * String
  * Boolean
  * Undefined
  * Null
  * Symbol

Objects are used to construct custom data. Some built in object types are:

  * Array
  * Date
  * Regex
  ...

Special Characters

  * \n - new line
  * \t - tab
  * \r - carriage return
  * \' - single quote
  * \" - double quote
  * \$ - dollar sign
  * \\ - backslash

## Template Strings
Up until ES6, the only way to represent values in a string was string concatenation.
`let temp = -27`
`"Current temperature is: " + temp`
ES6 introduces string templates, also known as string interpolation.
```javascript
  `Current temperature is: ${5}`
```

## Booleans
Value type that has only to values, true or false.

## Null and Undefined
JavaScript has two special types, null and undefined. null has only one possible
value (null), and undefined has only one possible value (undefined). Both null and
undefined represent something that doesn’t exist

The general rule of thumb is that null is a data type that is available to programmers and undefined should be reserved for JavaScript itself, to indicate that something hasn’t been given a value yet.

## Objects
Objects represent multiple or complex values, and can change over their lifetime. In
essence, an object is a container, and the contents of that container can change over
time (it’s the same object with different contents).

```javascript
  //empty object
  const obj = {}
```

Adding properties to objects

```javascript
  let obj = {
    property1: "value1",
    property2: "value2"
  };

  obj = {};
  obj.propery1 = "value1";

  obj = {};
  obj["property1"] = "value1";
  obj["not a valid identifier"] = "value2"

  //you can also use computed member access operator for symbol properties
  const SIZE = Symbol();
  obj[SIZE] = 10;

  //objects can contain functions
  obj.jump = function() { console.log("jumped") ;}
  //call function
  obj.jump();

  //delete a property from object
  delete obj.property1;
```

## Arrays
In JavaScript, arrays are a special type of object. Unlike regular objects, array contents have a natural order (element 0 will always come before element 1), and keys are numeric and sequential.

```javascript
  //creating arrays
  const arr1 = [1, 2, 3];
  const arr2 = [{ property1: "value1", property2: "value2" }, { property1: "value11", property2: "value21" }];
  const arr3 = [
    "String1",
    "String2"
  ];
  const arr4 = [
    [1, 2 ,3],
    [4, 5, 6]
  ];
```
You can access property length of arrays `arr.length;`.
Access object elements by index. `arr[0]; arr[0] =  5; arr[arr.length - 1];`
Arrays in JavaScript can be nonhomogeneous, meaning the elements in an array do not need to be the same type.

## Dates
Date and time are represented by the Date object.

```javascript
  //creating Dates
  const now = new Date();
  const halloween = new Date(2016, 9, 31); // 31.10.2016, Months are 0 based
  const halloweenParty = new Date(2016, 9, 31, 19, 0) //19.00, 31.10.2016

  halloweenParty.getFullYear(); // 2016
  halloweenParty.getMonth(); // 9
  halloweenParty.getDate(); // 31
  halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
  halloweenParty.getHours(); // 19
  halloweenParty.getMinutes(); // 0
  halloweenParty.getSeconds(); // 0
  halloweenParty.getMilliseconds(); // 0
```

## Data Type Conversion

### Converting to Numbers
Passing string to Number object constructor which returns a number value, not Number object.

```javascript
  const numStr = "33.3";
  const num = Number(numStr);   
```

The second approach is to use the built in parseInt(number, radix) and parseFloat(number, radix). They allow messier input as they discard everything past the number. Also, you can specify the radix, which is the base for the number you want to parse. Default is 10.

```javascript
const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is
 // parsed in base 10
const b = parseInt("3a", 16); // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph"); // kph is ignored
```
### Converting to String
All objects in JavaScript have `toString()` method.  


## Control flow
Broadly speaking, control flow can be broken into two subcategories: conditional (or branching) control flow and loop control flow. Conditional control flow (if and if...else, which we’ve seen, and switch, which we’ll see shortly) represent a fork in the road: there are two or more paths to take, and we take one, but we don’t double back. Loop control flow (while, do...while, and for loops) repeat their bodies until a condition is met.

## Block Statements
Block statements (sometimes called compound statements) are not control flow statements, but they go hand in hand with them. A block statement is just a series of statements enclosed in curly braces that is treated by JavaScript as a single unit. While it is possible to have a block statement by itself, it has little utility

```javascript
  { // start block statement
   console.log("statement 1");
   console.log("statement 2");
  } // end block statement
  console.log("statement 3");
```

Where block statements become useful is with control flow statements.

### IF-ELSE Statement
```javascript
  let grade = 7;

  if (grade === 7)
  {
    console.log("Grade is 7");
  }
  else
  {
    console.log("Grade isn't 7");
  }

  if (grade < 6)
    console.log("Grade is too low");

  if (grade < 6)
  {
    console.log("Grade is too low");
  }
  else if (grade > 6 && grade < 10)
  {
    console.log("Grade is good");
  }
  else
  {
    console.log("Grade is perfect");
  }
```

### SWITCH Statement
Where if...else statements allow you to take one of two paths, switch statements allow you to take multiple paths based on a single condition. It follows, then, that the condition must be something more varied than a truthy/falsy value: for a switch statement, the condition is an expression that evaluates to a value. JavaScript will evaluate expression, pick the first case that matches, and then execute statements until it sees a break, return, continue, throw or the end of the
switch statement.

```javascript
  let totalBet = 7;
  switch(totalBet) {
   case 7:
     totalBet = funds;
     break;
   case 11:
   case 13:
     totalBet = 0;
     break;
   case 21:
     totalBet = 21;
   break;
   default:
    console.log('default');
    break;
  }
```
Default is a special case that will be executed if no other case is matched. If there is no break statement for a case, execution will simply executing the case bellow.

### WHILE Loop
```javascript
  let a = 0;
  while (a < 10)
  {
    console.log(a);
  }
```

### DO-WHILE Loop
```javascript
  let it = 0;
  do
  {
    console.log(it);
    it++;
  }
  while (it < 10);
```
DO-WHILE loop is different from WHILE loop because the condition is at the end, so it will be executed at least once.

### FOR Loop
```javascript
  for (let it = 0; it < 5; it++)
  {
    console.log(it);
  };

```

### FOR-IN Loop
The for...in loop is designed to loop over the property keys of an object. The syntax
is:
```javascript
  const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
  for(let prop in player)
  {
   console.log(prop + player[prop]);
  }
```

### FOR-OFF Loop
New in ES6, the for...of operator provides yet another way to loop over the elements in a collection. The syntax is
```javascript
  const hand = [randFace(), randFace(), randFace()];
  for(let face of hand)
  {
   console.log(`You rolled...${face}!`);
  }
```

## Control Flow Exceptions
There are four statements that can alter the normal processing of flow control. You can think of these as control flow “trump cards”:

  * break - breaks out of loop early
  * continue - skips one iteration in loop
  * return - exits the current function
  * throw - indicates an exception that must be caught

Control flow is really what makes our programs tick. Variables and constants may contain all the interesting information, but control flow statements allow us to make useful choices based on that data.

## Expressions and Operators
An expression is a special kind of statement that evaluates to a value. The distinction between an expression statement (which results in a value) and a non-expression statement (which does not) is critical: understanding the difference gives you the tools you need to combine language elements in useful ways.

Because expressions resolve to a value, we can combine them with other expressions, which in turn can be combined with other expressions, and so on. Nonexpression statements, on the other hand, might do something useful, but they cannot be combined in the same way. Also because expressions resolve to a value, you can use them in assignments. That is,
you can assign the result of the expression to a variable, constant, or property.

```javascript
  let a;
  a = 5*3 //first expression is multiplication, second expression is assignment to a

  let x, y;
  y = x = 3 * 5;
```

## Operators
You can think of operators as the “verb” to an expression’s “noun.” That is, an expression is a thing that results in a value. An operator is something you do to produce a value. The outcome in both cases is a value. Operators use one or more operands. For example, consider following expression: 5 + 4, the operator is +, and the operands are 5 and 4.

### Arithmetic Operators:

  * + Addition                2 + 4
  * - Subtraction             2 - 4
  * * Multiplication          2 * 4
  * / Division                2 / 4
  * % Remainder               5 % 2
  * - Unary Negation          x = 5, -x
  * + Unary Plus              +x, try converting x to a number
  * ++ Pre-increment          ++5
  * ++ Post-increment         5++
  * -- Pre-decrement          --5
  * -- Post-decrement         5--

Difference between pre and post increment and decrement. Pre increment increases the value by one, and evaluates to the new value, while post increment increases the value by one, and evaluates to the value before. Same goes for decrement.

```javascript
  let a = 5;
  console.log(a++);         //5
  console.log(a);           //6

  a = 5;
  console.log(++a);         //6
  console.log(a);           //6
```

### Comparison Operators:

  * === Strict equality
  * !== Strict inequality
  * == Abstract equality
  * != Abstract inequality
  * < Less than
  * > Greater than
  * <= Less or equal to
  * >= Greater or equal to

Difference between strict and abstract equality is that strict equality checks both value and type when comparing, while abstract equality checks only value when comparing two objects or primitives.

```javascript
  const n = 5;
  const s = "5";
  n === s; // false -- different types
  n !== s; // true
  n === Number(s); // true -- "5" converted to numeric 5
  n !== Number(s); // false
  n == s; // true; not recommended
  n != s; // false; not recommended
  const a = { name: "an object" };
  const b = { name: "an object" };
  a === b; // false -- distinct objects
  a !== b; // true
  a == b; // false; not recommended
  a != b; // true; not recommended
```

## String Concatenation
JavaScript determines whether to attempt addition or string concatenation by the types of operands. Both addition and concatenation are evaluated from left to right. JavaScript examines each pair of operands from left to right, and if either operand is a string, it assumes string concatenation. If both values are numeric, it assumes addition. Consider the following two lines:

```javascript
  3 + 5 + "8" // evaluates to string "88"
  "3" + 5 + 8 // evaluates to string "358"
```

## Logical Operators
Logical operators concern themselves only with boolean values, which can take on only one of two values: true or false.

  * && - And
  * || - Or
  * ! - Not

AND is true only if both of its operands are true, and OR is false only if both of its operands are false. NOT is straightforward, it takes its only operand and inverts it.
JavaScript doesn't have a logical operator for XOR (exclusive or), but can be achieved `(x || y) && x !== y.`.

False Values:

  * undefined
  * null
  * false
  * 0
  * NaN (not a number)
  * '' (empty string)

## Operator Precedence
Currently, JavaScript has 56 operators grouped into 19 precedence levels. Operators with a higher precedence are performed before operators with a lower precedence. Operators at the same precedence level are either evaluated right to left or left to right. For example, multiplication and division have the same precedence level (14) and are evaluated left to right, and assignment operators (precedence level 3) are evaluated right to left.

## Conditional Operator
JavaScript’s sole ternary operator, meaning it takes three operands. The conditional operator is the expression equivalent of an if...else statement. Here’s an example of the conditional operator:
```javascript
  const doIt = false;
  const result = doIt ? "Did it!" : "Didn't do it.";
```
If `doIt` is true, `result` will be assigned `"Did it!"`, otherwise, `"Didn't do it"`.

## Grouping Operator
The grouping operator (parentheses) has no effect other than to modify or clarify operator precedence

## Bitwise Operators
Bitwise operators allow you to perform operations on all the individual bits in a number.

  * & - Bitwise AND
  * | - Bitwise OR
  * ^ - Bitwise XOR
  * ~ - Bitwise NOT
  * << - Left shift
  * >> - Right shift

## `typeof` Operator

The `typeof` operator returns a string representing the type of its operand.

```javascript
  typeof undefined //"undefined"
  typeof null //"object"
  typeof {} //"object"
  typeof [] //"object"
  typeof 1 //"number"
  typeof '' //"string"
  typeof true //"boolean"
  typeof Symbol() //"symbol", new in ES6
  typeof function() {} //"function"
```

## Assignment Operator
The assignment operator is straightforward: it assigns a value to a variable. What’s on the left hand side of the equals sign (sometimes called the lvalue) must be a variable, property, or array element. That is, it must be something that can hold a value (assigning a value to a constant is technically part of the declaration, not an assignment operator).

```javascript
  //chain assignment
  let v, v0;
  v = v0 = 9.8; // first v0 gets the value 9.8, and then v gets the value of v0

  //assignment in while condition
  while((a = rand()) < 5)
  {
    ...
  }
```

## Assignment with Operation

  * `x += 2 // x = x + 2`
  * `x -= 2 // x = x - 2`
  * `x *= 2 // x = x * 2`
  * `x /= 2 // x = x / 2`
  * `x %= 2 // x = x % 2`
  * `x <<= y // x = x << y`
  * `x >>= y // x = x >> y`
  * `x &= y // x = x & y`
  * `x |= y // x = x | y`
  * `x ^= y // x = x ^ y`

## Destructuring Assignment
New in ES6 is a feature called destructuring assignment that allows you to take an object or an array, and “destructure” it into individual variables. When you destructure an object, the variable names must match property names in the object.

```javascript
  const obj = { b: 2, c: 3, d: 4 };
  const {a, b, c} = obj;
  a; // undefined: there was no property "a" in obj
  b; // 2
  c; // 3
  d; // reference error: "d" is not defined
```

With array destructuring, you can assign any names you want (in order) to the elements of the array:

```javascript
  const arr = [1, 2, 3];
  let [x, y] = arr;
  x; // 1
  y; // 2
  z; // error: z hasn't been defined

  const arr = [1, 2, 3, 4, 5];
  let [x, y, ...rest] = arr;
  x; // 1
  y; // 2
  rest; // [3, 4, 5]
```

## Functions
A function is a self-contained collection of statements that run as a single unit: essentially, you can think of it as a subprogram. Every function has a body; this is the collection of statements that compose the function.

```javascript
  //function declaration
  function sayHello()
  {
    console.log('Hello World');
  }
```

You can now execute the function with `sayHello();`.

## Return Values
Invoking a function is like executing an expression, so it can resolve to a value. Resolving to a value is done with the `return` statement.

```javascript
  function sayHello()
  {
    return 'Hello World'
  }

  console.log(sayHello());
```

If you don’t explicitly call return, the return value will be undefined. A function can
return any type of value.
Functions are objects, so they can be referenced just like any other objects. To reference a function, use the function identifier without parentheses. For example, `const a = sayHello;`. And now execute it `a();`

## Function Arguments
A way to get data into the function for further use.

```javascript
  // a and b are function arguments
  function avg(a, b) {
   return (a + b)/2;
  }

  avg(2, 5);
```

In many languages, a function’s signature includes its arguments. For example, in C, f() (no arguments) is a different function than f(x) (one argument), which is a different function than f(x, y) (two arguments). JavaScript makes no such distinction, and when you have a function named f, you can call it with 0 or 1 or 10 arguments, and you’re calling the same function. If you fail to provide arguments, they will implicitly receive undefined value.
In ES6, you can declare default values for arguments.

```javascript
  function f(a, b = "default", c = 3)
  {
   return `${a} - ${b} - ${c}`;
  }
  f(5, 6, 7); // "5 - 6 - 7"
  f(5, 6); // "5 - 6 - 3"
  f(5); // "5 - default - 3"
  f(); // "undefined - default - 3"
```

Functions can be properties of objects, and are often called methods.

```javascript
  const duck = {
    name: "donald",
    introduceYourself() {
      return this.name;
    }
  };
  console.log(o.introduceYourself());
```

`this` is a special read only value inside a function body. If the function is a member function, `this` refers to the object. It’s important to understand that this is bound according to how the function is called, not where the function is declared. Consider the following:

```javascript
  const func = duck.introduceYourself();
  func(); //returns "undefined"
```

## Anonymous Functions
Functions that don't have an identifier. We use a function expression, which is a way to declare an unnamed function and assign the result to a variable. `const f = function() {}; f();`
We can also give the function expression a name, if we want to use the reference to the function from the inside, for recursion. `const f = function g() {};`
ES6 introduces a new syntax called arrow 'notation'. It allows the following:

  * You can omit the word function
  * If the function takes a single parameter you can omit the parentheses
  * If the function body is a single expression, you can omit the curly braces and return statement

Arrow functions are always anonymous.

```javascript
  const f1 = function() { return "hello!"; }
  // OR
  const f1 = () => "hello!";
  const f2 = function(name) { return `Hello, ${name}!`; }
  // OR
  const f2 = name => `Hello, ${name}!`;
  const f3 = function(a, b) { return a + b; }
  // OR
  const f3 = (a,b) => a + b;
```

## Scope
Scope determines when and where the variables, constants and arguments are considered to be defined. Scoping in JavaScript is lexical, meaning we can determine what variables are in scope simply by looking at the source code. Variables that have not yet been declared, or variables that have ceased to exist because a function exits, are not in scope. Functions have access to variables that were available when they were defined, not when they were called. For example:

```javascript
  const x = 3;
  function f() {
   console.log(x); // this will work
   console.log(y); // this will cause a crash
  }
  const y = 3;
f();
```

Global scope is the scope you are in when you start your program. Anything you declare in global scope will be available to all scopes of a program. Global variables are not necessarily bad, but abusing them is.

```javascript
  let name = "Irena"; // global
  let age = 25; // global
  function greet() {
   console.log(`Hello, ${name}!`);
  }
  function getBirthYear() {
   return new Date().getFullYear() - age;
  }
```

Functions in this example are highly dependent on context.
Block scope is made by identifiers that are declared with `let` and `const`. Variables in different scopes can have same names, but they are different objects or primitives.

```javascript
  {
   // outer block
   let x = 'blue';
   console.log(x); // logs "blue"
   {
   // inner block
   let x = 3;
   console.log(x); // logs "3"
   }
   console.log(x); // logs "blue"
  }
  console.log(typeof x); // logs "undefined"; x out of scope
```
This example demonstrates variable masking. In the inner block, x is a distinct variable from the outer block (with the same name), which in effect masks (or hides) the x that’s defined in the outer scope. When execution enters the inner block, and a new variable x is defined, both variables are in scope, we simply have no way of accessing the variable in the outer scope (because it has the same name).
Functions can be defined in one place, and used in another, but they will use the scope in which they were defined.

```javascript
  let globalFunc; // undefined global function
  {
   let blockVar = 'a'; // block-scoped variable
   globalFunc = function() {
   console.log(blockVar);
   }
  }
  globalFunc(); // logs "a"
```

It’s quite common to intentionally define a function in a specific scope so that it explicitly has access to that scope. This is usually called a closure.
Immediately invoked function expressions are functions which are declared and invoked after it.

```javascript
  (function() {
   // this is the IIFE body
  })();
```

Hoisting is a mechanism where JavaScript scans the whole scope, and variables declared with var are hoisted to the top. Only the declarations are hoisted, assignments are not. Instead of using `var`, you should use `let` and `const`.

```javascript
  x; // undefined
  var x = 3;
  x; // 3
```

Like variables declared with var, function declarations are hoisted to the top of their scope, allowing you to call functions before they’re declared:

```javascript
  f(); // logs "f"
  function f()
  {
   console.log('f');
  }
```

## Objects and Object Oriented Programming
Class and instance creation:

```javascript
   class Car {
     constructor(make, model)
     {
       this.make = make;
       this.model = model;
       this.userGears = ['P', 'N', 'R', 'D'];
       this.userGear = this.userGears[0];
     }
     shift(gear)
     {
     if(this.userGears.indexOf(gear) < 0)
     throw new Error(`Invalid gear: ${gear}`);
     this.userGear = gear;
     }
   }

  const car = new Car('Tesla', 'Model 5');  //creating instance
  car.shift('D');                           //invoking method
```

This keyword is used to refer to the instance the method was invoked on. Most OO languages allow you to specify access level of methods and properties, however, JavaScript doesn't have a mechanism for that. Nothing is stopping you from assigning values directy, like `car.userGear = 'random';`.

Dynamic properties help mitigate this weakness. They have the semantics of a property, and functionality of a method. `_property` is used to declare that the property should be private. That is just a convention, there are no private properties, you can still set `_property` directly.

```javascript
  class Car
  {
     constructor(make, model)
     {
       this.make = make;
       this.model = model;
       this._userGears = ['P', 'N', 'R', 'D'];
       this._userGear = this._userGears[0];
     }
     get userGear() { return this._userGear; }
     set userGear(value)
     {
       if(this._userGears.indexOf(value) < 0)
       throw new Error(`Invalid gear: ${value}`);
       this._userGear = vaule;
     }
     shift(gear) { this.userGear = gear; }
   }
 ```

Prior to the class keyword introduced in ES6, to create a class you would create a function that served as the class constructor. The nature of classes hasn't changed, it's just more intuitive.

```javascript
function Car(make, model)
{
 this.make = make;
 this.model = model;
}
typeof Car // "function"
```

## Prototype
When you refer to methods that are available on instances of a class, you are referring to prototype methods `car.shift()`.
Every function has a special property called prototype, this is important for constructor functions. Every object in JavaScript has a prototype. A prototype is essentially a pointer to another object. When you try to access a property on an object, if it can't find it, it will look in the prototype of the object. The chain can go for as long as there are prototypes. When you create an instance of a class, it inherits all functionalities from the class' prototype. This is good for creating class hierarchies.
Inheritance is done with the keyword `extends`, it marks a class as a subclass of another class. The `super()` calls the constructor of the super class.

```javascript
  class Vehicle
  {
    constructor()
    {
      this.passengers = [];
      console.log("Vehicle created");
    }
    addPassenger(p)
    {
      this.passengers.push(p);
    }
  }
  class Car extends Vehicle {
    constructor()
    {
      super();
      console.log("Car created");
    }
    deployAirbags()
    {
      console.log("BWOOSH!");
    }
  }
```

Static methods do not apply to specific instances, they are bound to the class itself.
```javascript
  static getNextVin() {
    return Car.nextVin++; // we could also use this.nextVin++, but Car emphasizes it's a static method
    }
  }
```

Polymorphism is OO parlance for treating an instance as a member of not only its own class, but also any superclass. In JavaScript, which is not typed, any object can be used anywhere, it uses some form of duck typing. JavaScript provides the `instanceof` operator which can tell you if the object is of given class. As long as you don't change the prototype properties, it will work for superclasses as well.

## Exceptions
JavaScript has a built in `Error` object, which is convenient for any kind of error handling.
`const error = new Error('invalid error message')` The error object by itself doesn't do much, but you can use it for communication and handling.
Exception handling is accomplished by using the try...catch statement. You try to execute some code, and catch eventual error. Control shifts to the catch block as soon as an error occurs. You can also throw an error, to manually initiate the exception handling mechanism. You can use the finally block to execute some code whether the error has happened or not, at the end.

## Iterators and Generators
An iterator is roughly analogous to a bookmark: it helps you keep track of where you are. Consider this array as an example.
We can get an iterator of the array using `const it = array.values();` To start getting values of an array, use `it.next()`. It returns an object containing both the value, and the boolean, whether the array was looped over all of its values. When you iterate over all of the array's values, and call `it.next()`, you will get an object like
`{value: "undefined", done: true}`. Iterators are distinct, every time you create a new iterator, you start from the beginning. It is possible to write your own iterator because iterator protocol enables any object to be iterable. You need to specify `Symbol.iterator` property for the class, which returns an iteratable object.

```javascript
  class Log {
    constructor()
    {
      this.messages = [];
    }
    add(message)
    {
      this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator]()
    {
      return this.messages.values();
    }
  }
```

Or you can write your own method for defining iterators.

```javascript
  [Symbol.iterator]()
  {
    let i = 0;
    const messages = this.messages;
    return
    {
      next()
      {
        if(i >= messages.length)
          return { value: undefined, done: true };
        return { value: messages[i++], done: false };
      }
    }
  }
```

Generators are functions that use iterators to control their execution. Generators bring two things to the table: the first is the ability to control the execution of a function, having it execute in discrete steps. The second is the ability to communicate with the function as it executes. Generators are like functions that can yield control back to the caller and they don't run when you call them, they return an iterator. Their syntax is like normal function's syntax, with `*` at the end of function keyword.

```javascript
  function* counter() {
    yield 1;
    yield 2;
    yield 3;
  };

  const it = counter();

  (function (it) {
    for(let i = 0; i < 5; ++i)
    {
      console.log(it.next().value);
      console.log("we got controll back");
    }
  }) (it);
```

`yield` is used to give back control to the user, if you `return` the value, the iterator's `done` property will be set to `true`. `return` should be only used to stop the generator, not to return values.  


## Asynchronous Programming
In synchronous programming, you have to wait for the task to finish, while in asynchronous programming, you don't wait for the task to complete, you can move on to the next task before the previous one finishes. The result of each task can be handled when the task finishes.

In JavaScript, asynchronous programming is used for the following reasons:

  * Getting user input
  * Network requests (Ajax calls, for instance)
  * Filesystem operations (reading/writing files, etc.)
  * Intentionally time-delayed functionality (an alarm, for example)

Callbacks are a mechanism for asynchronous behavior. A callback is just a function that will be invoked later in time. It's just a regular JavaScript function. So the function that is going to take long to execute is set to be non-blocking, and trusted with a callback function to handle the results. All control is given to the asynchronous function.

```javascript
  console.log('before function');
  setTimeout(function() {
    console.log('after end of function');
  }, 3000);
  console.log('after start and before end of function');
```
You can also use setInterval and clearInterval, which runs your function forever with regards to interval, until you stop it.

Callbacks make exception handling difficult (which we’ll see soon), there needed to be a standard way to communicate a failure to the callback. The convention that emerged was to use the first argument to a callback to receive an error object. If that error is null or undefined, there was no error.

## Promises
What promises do is ensure that callbacks are always handled in the same predictable manner, eliminating some of the nasty surprises and hard-to-find   bugs you can get with callbacks alone. The basic idea of a promise is simple: when you call a promise-based asynchronous function, it returns a Promise instance. The promise instance can fulfilled (success) or rejected (failure), or pending. Once a promise has been fulfilled or rejected, it is settled, it can't change it's state. Good thing about promises is they are objects, so they can be passed around as objects. If you want to start an asynchronous task, but prefer someone else to handle it, you can do it by passing the promise.

The most basic way to create a Promise is to use the constructor directly.
```javascript
    new Promise(function (resolve, reject) {
          // Does nothing
    });
```
The resolve argument is also a function, and encapsulates what we want to do when we receive the expected value. The reject argument is also a function, and represents what we want to do when we receive an error. Finally, the function we pass to the Promise constructor handles the asynchronous code itself.
Every Promise has a method, called then, which accepts two functions as arguments: resolve, and reject, in that order. Calling then on a Promise and passing it these functions allows the function you passed to the constructor to access them.

```javascript
  function getData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let data = [1, 2, 3, 4, 5];
        if (data === undefined)
        {
          reject(Error("Couldn't get data"));
        }
        else
        {
          resolve(data);
        }
      }, 5000);
    });
  };

  const promise = getData();

  promise.then(function(data) {
    console.log(data);
  }, function(err) {
    console.log(err);
  });
```

The then callback is triggered when the promise is resolved. You can also chain then method callbacks. Each then receives the result of the previous then's return value. Then method can be chained directly on the constructor as well.

```javascript
  new Promise(function(resolve, reject) {
  	// A mock async action using setTimeout
  	setTimeout(function() { resolve(10); }, 3000);
  })
  .then(function(num) { console.log('first then: ', num); return num * 2; })
  .then(function(num) { console.log('second then: ', num); return num * 2; })
  .then(function(num) { console.log('last then: ', num);});
```
You can also use the catch method, when the promise is rejected, that way you can pass only the function for resolve, in then method, and catch for errors in the end.

```javascript
  promise
  .then(function(data) {})
  .then(function(data) {})
  .catch(function(err) {});
```
JavaScript also provides the `Promise.all` method, which waits for all promisses to finish, before executing the then method.

## Regular Expressions
Regular expressions are patterns used to match character combinations in strings. You can construct a regular expression as a literal, or as an object.

Constructing regex.
```javascript
  const re1 = /going/; // regex that can search for the word "going"
  const re2 = new RegExp("going"); // equivalent object constructor
```
Regular expression literals provide compilation of the regular expression when the script is loaded. When the regular expression will remain constant, use this for better performance.
Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing.

For example, the pattern `/abc/` matches character combinations in strings only when exactly the characters 'abc' occur together and in that order.

Here are some of the most common special characters in regular expressions:

  * * - 0 or more occurrences of preceding element
  * + - 1 or more occurrences of preceding element
  * ? - 0 or 1 occurrences of preceding element
  * ^ - matches beginning of input
  * $ - matches end of input
  * . - matches any single character except new line
  * x|y - matches `'x'` or `'y'`
  * {n} - exactly n occurrences of preceding character
  * {n, m} - range from n to m occurrences of preceding character
  * [xyz] - matches any of the characters in the brackets
  * [^xyz] - matches any of the characters not present in the brackets
  * \ - used for escaping special characters

## The Document Object Model (DOM)
The Document Object Model, or DOM, is a convention for describing the structure of an HTML document, represented as a tree which consists of nodes. Every node has a parent, except the root node, and zero or more children. The root node is the document, which has to children, <head> and <body> elements.

The DOM provides the get method, which allows you to locate specific HTML elements.

```javascript
  const title = document.getElementById('title'); //returns element with id 'title'
  const callouts = document.getElementsByClassName('callout'); //returns elements with class 'callout'
  const paragraphs = document.getElementByTagName('p'); //returns paragraph elements
```

DOM also allows you to query elements' relations to locate elements, using CSS selectors.
You can change innerHtml and textContent property of an element, which would modify the DOM.

```javascript
const el = document.getElementById('element');
el.textContent = "Modified HTML file"; // look for change in browser
el.innerHTML = "<i>Modified</i> HTML file"; // look for change in browser
```

You can create new elements explicitly by creating new nodes in the document and you have to add them to the DOM manually.

```javascript
  const child = document.createElement('p');
  const parent = document.getElementById('container');
  parent.appendChild('child');
```
You can specify on which position you want to add the child using `insertBefore(child, element);`.
You can modify the class of the node, using `element.classList.add('class')` and `element.classList.remove('class');`.

## DOM Events
The DOM api describes around 200 events. Every element has a method `addEventListener(name, function(event))` which allows you to specify the behavior when that event occurs. The event object contains information about the event that occurred. Multiple handlers can handle the same event. You can prevent default behavior of elements by specifying `event.preventDefault()` in the handler. Since multiple hanlers can handle the same event, it can be done in bottom-up and top-down manner. `preventDefault()` stops the handling of event, but propagates it to other handlers in the chain. You can prevent propagation using `preventPropagation()`.

## Ajax
Ajax enables asynchronous communication with the server, which means you don't need to refresh the page, every time you need something from the server. You can refresh the elements of DOM when the response arrives in the browser. The core concept is simple. The browser makes a HTTP request programatically and recieves a response, usually in JSON format.

## jQuery
jQuery is a popular library for manipulating the DOM and executing Ajax requests. The easiest way to include jQuery is by using a CDN:
`<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>`

jQuery allows you to put your code in a callback that will only be invoked once the browser has fully loaded the page and the DOM has been constructed:
```javascript
  $(document).ready(function() {
   // code here is run after all HTML has been
   // loaded and the DOM is constructed
  });
```
Any DOM manipulation you do with jQuery starts with creating a jQuery object which containes a set of DOM elements. The jQuery function is called with CSS selectors or with html using `jQuery` or `$`.
Calling jQuery with a CSS selector returns a jQuery object matching the selector. Calling jQuery with HTML creates a new DOM element.

```javascript
  const $paragraphs = $('p');
  const $newParagraph = $('<p>Text</p>');
```

Manipulating jQuery objects

```javascript
  $('p').text('New text'); //changes text of all paragraphs in DOM
  $('#description').remove(); //removes the paragraph with id 'description from the DOM'
  $('p').append('<sup>*</sup>'); //appends child to elements
  $('p:odd').css('color', 'red'); //changes color of odd numbered paragraphs
```

You can unwrap the jQuery element using the `get(idx)`, which will return a DOM element.

##Node

### Modules
Modules are a mechanism for packaging and namespacing code. Module is an object in node, in which you put every object you wish to export so someone can use in their code. You do that by assigning the objects on `module.exports`.

```javascript
  //helloEarth.js
  function hello()
  {
    console.log('Hello Earth');
  }
  module.exports = hello;

  //helloMars.js
  function hello()
  {
    console.log('Hello Mars');
  }
  module.exports = hello;

  //app.js
  const earth = require('helloEarth');
  const mars = require('helloMars');
  earth.hello();
  mars.hello();
```

Modules can export a value of any type. You can assign more objects to exports, it is just an object containing all the objects you want to share. There are three types of modules:

                              * Core, reserved module names provided by Node
                              * File, modules you create
                              * npm, modules npm got for you

Npm will loke for modules in the node_modules directory of your projects. You should let npm take care of those modules, and not change anything manually. Node remembers when you import modules, so you can import any module only once.

### Customizing Modules with Function Modules
Modules most commonly export objects, and sometimes a single function. There’s another very common pattern. A module that exports a function that’s intended to be invoked immediately. It’s the return value of that function (which can be a function itself) that’s intended to be used (in other words, you don’t use the function that’s returned. You invoke that function and use whatever it returns).

### File System Access
Whenever you invoke a Node application, it inherits it's current working directory from where you run it from (which may be different than where the file lives). The root directory in the project is stored in a special variable `__dirname`.

Writing to a file:
```javascript
  const fs = require('fs');

  fs.writeFile(__dirname + '/hello.txt',
   'hello from Node!', function(err) {
   if(err) return console.error('Error writing to file.');
  });
```

Using string concatenation for declaring path can be problematic, so Node provides the path module.
```javascript
  //write
  const fs = require('fs');
  const path = require('path');
  fs.writeFile(path.join(__dirname, 'hello.txt'),
   'hello from Node!', function(err) {
   if(err) return console.error('Error writing to file.');
  });

  //read
  const fs = require('fs');
  const path = require('path');
  fs.readFile(path.join(__dirname, 'hello.txt'),
   { encoding: 'utf8' }, function(err, data) {
   if(err) return console.error('Error reading file.');
   console.log('File contents:');
   console.log(data);
  });
```
If you don't tell node what encoding to use, it will return a buffer. All the functions in fs module have synchronous versions.

### Process
Every running Node program has access to a variable called process that allows it to get information about its own execution and control it. You can immediately stop the execution calling `process.exit()`. You can also provide a numeric parameter to say whether the script exited without errors. 0 indicates no errors.
The process object also gives you access to an array containing the command-line arguments passed to the program. The command line arguments are stored in `process.argv`. If you invoke the program like this:
`$ node args.js file1.txt file2.txt file3.txt`
You can list all arguments:

```javascript
  //args.js
  console.log(process.argv);
```

The first element is the interpreter, or program that interpreted the source file (node, in our case). The second element is the full path to the script being executed, and the rest of the elements are any arguments passed to the program. Process also gives you access to environment variables through the object `process.env`. The child_process module allows your app to run other programs, whether it be another Node program, an executable, or a script in another language.

### Operating System
The os module provides some platform-specific information about the computer on which the app is running. Here is an example that shows the most useful information that os exposes (and their values on my cloud-based dev machine):

```javascript
  const os = require('os');

  console.log("Hostname: " + os.hostname());
  console.log("OS type: " + os.type());
  console.log("OS platform: " + os.platform());
  console.log("OS release: " + os.release());
  console.log("CPU architecture: " + os.arch());
  console.log("Number of CPUs: " + os.cpus().length);
```

### Streams
Streams are pipes that let you easily read data from a source and pipe it to a destination. Streams can be readable, writable or both. Readable streams let you read data from a source while writable streams let you write data to a destination.
Here is an example of a readable stream:
```javascript
  const fs = require('fs');
  const readableStream = fs.createReadStream('stream.txt');
  const data = '';

  readableStream.on('data', function(chunk) {
      data += chunk;
  });

  readableStream.on('end', function() {
      console.log(data);
  });
```
Here we attach a callback for the event on data, to add chunk of read data. When the whole file is read, we log the whole data of the file.

Here is an example of a writable stream:
```javascript
  const ws = fs.createWriteStream('stream.txt', { encoding: 'utf8' });

  ws.write('line 1\n');
  ws.write('line 2\n');
  ws.end();
```
The `end()` method can take one parameter which is data to be written before closing the stream.

Because data “flows” through streams, it stands to reason that you could take the data coming out of a read stream and immediately write it to a write stream. This process is called piping. For example, we could pipe a read stream to a write stream to copy the contents of one file to another:

```javascript
  const rs = fs.createReadStream('stream.txt');
  const ws = fs.createWriteStream('stream_copy.txt');

  rs.pipe(ws);
```

### Servers
The http module (and its secure counterpart, the https module) exposes a createServer method that creates a basic web server. All you have to do is provide a callback function that will handle incoming requests. To start the server, you simply call its listen method and give it a port:

```javascript
  const http = require('http');

  const server = http.createServer(function(req, res) {
   console.log(`${req.method} ${req.url}`);
   res.end('Hello world!');
  });
  const port = 8080;

  server.listen(port, function() {
   // you can pass a callback to listen that lets you know
   // the server has started
   console.log(`server startd on port ${port}`);
  });
```
This will render 'Hello World!' every time you visit http://localhost:8080.

At the heart of Node’s web server is the callback function that you provide, that will respond to all incoming requests. It takes two arguments, a request object and a response object.
If you’re using Node to serve websites, you’ll probably want to look into using a framework such as Express or Koa.

Here is an example using express:

```javascript
  const express = require('express');
  const app = express();

  app.get('/', function(req, res) {
    res.send('Hello');
  });

  app.get('/some/path', function(req, res) {
    res.send('Well Done');
  });

  app.get('/hello/:name', function(req, res) {
    res.send('Hello ' + req.params.name);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
```

### Protecting Objects, Freezing, Sealing, Preventing Extensions
JavaScript provides three mechanisms for preventing unintentional modifications.
Freezing prevents any changes to an object. It makes the object immutable.
Once you freeze an object, you can't:

  * Set the values of the object's properties
  * Call methods that modify object's properties
  * Invoke setters on the object
  * Add new properties
  * Add new methods
  * Change configuration of existing properties and methods

To freeze an object, use `Object.freeze(myObject);`. You can check whether an object is frozen using `Object.isFrozen(myObject);`

Sealing an object prevents from adding new properties to an object, or the reconfiguration and removal of existing ones. You can seal an object using `Object.seal(myObject)` and you can check whether an object is sealed using `Object.isSealed(myObject)`.

Preventing extensions is the protection. Making an object nonextensible, only prevents new
properties from being added. To make the object nonextensible use `Object.preventExtensions(myObject);` and to check whether an object is extensible, use `Object.isExtensible(myObject);`.
