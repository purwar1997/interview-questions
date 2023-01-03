// code inside imported files is executed first

console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));
