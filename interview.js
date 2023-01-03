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

// 'use strict' won't allow variable to be declared without var, let or const keyword

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

// object keys are always of string type

/** question 7 */
// String.prototype.giveLydiaPizza = () => {
//   return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';
// console.log(name.giveLydiaPizza());

// method will be available on all the strings because it is defined under String prototype

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

/** question 10 */
console.log(typeof typeof 1);
console.log(typeof console);
console.log(typeof NaN);

// console is an object provided by global window or node object
// log(), error() and table() are methods available on console object

/** question 11 */
(() => {
  let x, y;

  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }

  console.log(x, y);
})();

/** question 12 */
console.log(
  [
    [0, 1],
    [2, 3],
  ].reduce(
    (acc, curr) => {
      return acc.concat(curr);
    },
    [1, 2]
  )
);

/** question 13 */
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
console.log(browser);

// values are not repeated inside set
// 'F' is not the same as 'f'

/** question 14 */
console.log(NaN === NaN);

// === checks two things: datatype and content
// datatype is same i.e Number
// Number('foo') = NaN and Number('pow') = NaN. No two NaN's are same because their content is different

/** question 15 */
async function func() {
  return 10;
}

console.log(func());

// async function always returns a promise

/** question 16 */
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async item => {
    await delayedLog(item);
  });

  console.log('Process completed');
}

process([1, 2, 3, 5]);

/** question 17 */
var set = new Set();
set.add('+0').add('-0').add(NaN).add(undefined).add(NaN);
console.log(set);

/** question 18 */
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

console.log(sym1 === sym2, sym3 === sym4);

// Symbol is a contructor which returns a symbol value
// Symbol() always returns a unique symbol
// Symbol.for(key) first checks for a key in the Global symbol registry. If that key exists, it returns the symbol value
// associated with it, otherwise it creates a new key-symbol pair in the registry

/** question 19 */
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === 'string') {
  console.log('It is not a string');
} else {
  console.log('It is a string');
}

if (!typeof myString === 'number') {
  console.log('It is not a number');
} else {
  console.log('It is a number');
}

/** question 20 */
// const [x, ...y, z] = [1, 2, 3, 4];
// console.log(x, y, z);

// rest operator should be at last while destructuring

/** question 21 */
const props = [
  { id: 1, name: 'Jack' },
  { id: 2, name: 'Bill' },
  { id: 3, name: 'Tom' },
];

const [, , { name }] = props;
console.log(name);

/** question 22 */
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }

//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }

//   constructor(size) {
//     super(name);
//     this.size = size;
//   }

//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// }

// A class can have only one constructor

/** question 23 */

// index.js
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;
