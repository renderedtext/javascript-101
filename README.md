# javascript-101

EcmaScript 6 (ES6)

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

Package Management npm

Npm is used for installing or buidling tools and comes bundled with Node.js.
Some of the most frequent npm commands are:

  * `npm install package_name -g` - installs package globally
  * `npm install package_name` - installs package locally for project, in node_modules folder, but doesn't add dependency to      package.json
  * `npm install --save package_name` - installs package locally for project, in node_modules folder, and adds dependency to      package.json
  * `npm install --save-dev package_name` - installs package locally for project, in node_modules folder, and adds dependency     only for development environment, these are dependencies the project can run without, but are very helpful for development

Gulp

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

Babel

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

Linter

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

Literals, Variables and Constants

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

Identifiers

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

Template Strings

Up until ES6, the only way to represent values in a string was string concatenation.
`let temp = -27`
`"Current temperature is: " + temp`
ES6 introduces string templates, also known as string interpolation.
`"Current temperature is: ${5}"`

Booleans

Value type that has only to values, true or false.

Null and Undefined

JavaScript has two special types, null and undefined. null has only one possible
value (null), and undefined has only one possible value (undefined). Both null and
undefined represent something that doesn’t exist

The general rule of thumb is that null is a data type that is available to programmers and undefined should be reserved for JavaScript itself, to indicate that something hasn’t been given a value yet.

Objects

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

Arrays

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

Dates

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

Data Type Conversion

Converting to Numbers

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
Converting to String

All objects in JavaScript have toString method.  


Control flow

Broadly speaking, control flow can be broken into two subcategories: conditional (or branching) control flow and loop control flow. Conditional control flow (if and if...else, which we’ve seen, and switch, which we’ll see shortly) represent a fork in the road: there are two or more paths to take, and we take one, but we don’t double back. Loop control flow (while, do...while, and for loops) repeat their bodies until a condition is met.

Block Statements

Block statements (sometimes called compound statements) are not control flow statements, but they go hand in hand with them. A block statement is just a series of statements enclosed in curly braces that is treated by JavaScript as a single unit. While it is possible to have a block statement by itself, it has little utility

```javascript
  { // start block statement
   console.log("statement 1");
   console.log("statement 2");
  } // end block statement
  console.log("statement 3");
```

Where block statements become useful is with control flow statements.

IF-ELSE Statement

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

SWITCH Statement

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

WHILE Loop

```javascript
  let a = 0;
  while (a < 10)
  {
    console.log(a);
  }
```

DO-WHILE Loop

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

FOR Loop
```javascript
  for (let it = 0; it < 5; it++)
  {
    console.log(it);
  };

```

FOR-IN Loop

The for...in loop is designed to loop over the property keys of an object. The syntax
is:
```javascript
  const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
  for(let prop in player)
  {
   console.log(prop + player[prop]);
  }
```

FOR-OFF Loop

New in ES6, the for...of operator provides yet another way to loop over the elements in a collection. The syntax is
```javascript
  const hand = [randFace(), randFace(), randFace()];
  for(let face of hand)
  {
   console.log(`You rolled...${face}!`);
  }
```

Control Flow Exceptions

There are four statements that can alter the normal processing of flow control. You can think of these as control flow “trump cards”:

  * break - breaks out of loop early
  * continue - skips one iteration in loop
  * return - exits the current function
  * throw - indicates an exception that must be caught

Control flow is really what makes our programs tick. Variables and constants may contain all the interesting information, but control flow statements allow us to make useful choices based on that data.

Expressions and Operators

An expression is a special kind of statement that evaluates to a value. The distinction between an expression statement (which results in a value) and a non-expression statement (which does not) is critical: understanding the difference gives you the tools you need to combine language elements in useful ways.

Because expressions resolve to a value, we can combine them with other expressions, which in turn can be combined with other expressions, and so on. Nonexpression statements, on the other hand, might do something useful, but they cannot be combined in the same way. Also because expressions resolve to a value, you can use them in assignments. That is,
you can assign the result of the expression to a variable, constant, or property.

```javascript
  let a;
  a = 5*3 //first expression is multiplication, second expression is assignment to a

  let x, y;
  y = x = 3 * 5;
```

Operators

You can think of operators as the “verb” to an expression’s “noun.” That is, an expression is a thing that results in a value. An operator is something you do to produce a value. The outcome in both cases is a value. Operators use one or more operands. For example, consider following expression: 5 + 4, the operator is +, and the operands are 5 and 4.

Arithmetic Operators:

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

Comparison Operators:

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

String Concatenation

JavaScript determines whether to attempt addition or string concatenation by the types of operands. Both addition and concatenation are evaluated from left to right. JavaScript examines each pair of operands from left to right, and if either operand is a string, it assumes string concatenation. If both values are numeric, it assumes addition. Consider the following two lines:

```javascript
  3 + 5 + "8" // evaluates to string "88"
  "3" + 5 + 8 // evaluates to string "358"
```

Logical Operators

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

Operator Precedence

Currently, JavaScript has 56 operators grouped into 19 precedence levels. Operators with a higher precedence are performed before operators with a lower precedence. Operators at the same precedence level are either evaluated right to left or left to right. For example, multiplication and division have the same precedence level (14) and are evaluated left to right, and assignment operators (precedence level 3) are evaluated right to left.

Conditional Operator

JavaScript’s sole ternary operator, meaning it takes three operands. The conditional operator is the expression equivalent of an if...else statement. Here’s an example of the conditional operator:
```javascript
  const doIt = false;
  const result = doIt ? "Did it!" : "Didn't do it.";
```
If `doIt` is true, `result` will be assigned `"Did it!"`, otherwise, `"Didn't do it"`.

Grouping Operator

The grouping operator (parentheses) has no effect other than to modify or clarify operator precedence

Bitwise Operators

Bitwise operators allow you to perform operations on all the individual bits in a number.

  * & - Bitwise AND
  * | - Bitwise OR
  * ^ - Bitwise XOR
  * ~ - Bitwise NOT
  * << - Left shift
  * >> - Right shift

typeof Operator

The typeof operator returns a string representing the type of its operand.

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

Assignment Operator

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

Assignment with Operation

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

Destructuring Assignment

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

Functions

A function is a self-contained collection of statements that run as a single unit: essentially, you can think of it as a subprogram. Every function has a body; this is the collection of statements that compose the function.

```javascript
  //function declaration
  function sayHello()
  {
    console.log('Hello World');
  }
```

You can now execute the function with `sayHello();`.

Return Values

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

Function Arguments

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

Anonymous Functions

Functions that don't have an identifier. We use a function expression, which is a way to declare an unnamed function and assign the result to a variable. `const f = function() {}; f();`

We can also give the function expression a name, if we want to use the reference to the function from the inside, for recursion.
`const f = function g() {};`

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
