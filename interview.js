// interview questions

/** question 1 */
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// var is function scoped and let is block scoped
// So, callback will form a closure with a new value of i everytime a loop is run

/** question 2 */
// console.log(+true);
// console.log(!'Lydia');

// + will convert boolean to a number and ! will convert a string to a boolean

/** question 3 */
// let greeting;
// greetign = {};
// console.log(greetign);

// variable can be declared without using let and var
// 'greetign' will be a new variable

/** question 4 */
// function foo() {
//   let x = (y = 0);

//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);

// x is a block scoped variable because of let keyword. So, it can't be accessed outside of function foo().
// y will be a global variable because there is no keyword(let, const and var) before it.

// If a variable is declared without using any keyword like var, let and const, it will automatically be a global variable.
// It doesn't matter if it is defined inside a block or a function or in a global scope.

/** question 5 */
// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// 'use strict' won't allow variable to be declared without var, let or const

/** question 6 */
// const sum = eval('10+10*5');
// console.log(sum);

// eval() receives primitive string as a parameter and return a value after evaluating the code inside it

/** question 6 */
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));

// keys of objects are always string
// set contain numbers not strings

/** question 7 */
// String.prototype.giveLydiaPizza = () => {
//   return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';
// console.log(name.giveLydiaPizza());

// method will be available on all the strings

/** question 8 */
// const foo = () => console.log('first');
// const bar = () => setTimeout(() => console.log('second'));
// const baz = () => console.log('third');

// bar();
// foo();
// baz();

// On encountering setTimeout(), JS will register callback with its timer (i.e 0ms) inside web API environment and
// that callback will be immediately pushed inside callback queue but event loop gives more priority to Global execution
// context and then to callback queue

/** question 9 */
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age} years old`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

// call() will invoke the function
// bind() will return a copy of sayHi() in which `this` will bind itself to `person` and `age` will bind itself to 21