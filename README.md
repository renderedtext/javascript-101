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

Package management npm

Npm is used for installing or buidling tools and comes bundled with Node.js.
Some of the most frequent npm commands are:

  * `npm install package_name -g` - installs package globally 
  * `npm install package_name` - installs package locally for project, in node_modules folder, but doesn't add dependency to      package.json
  * `npm install --save package_name` - installs package locally for project, in node_modules folder, and adds dependency to      package.json
  * `npm install --save-dev package_name` - installs package locally for project, in node_modules folder, and adds dependency     only for development environment, these are dependencies the project can run without, but are very helpful for development

Gulp

Gulp is a JavaScript build tool used for automatization of processes.
How to use gulp.

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






