import {generateRandomNumber, celciusToFahrenheit} from './utils.js'

// This import syntax when I have a const assigned to the exported function.
// import {getPosts} from './postControler.js'

// This syntax of import when the funciton has a default export.
import getPosts, {getPostLength} from './postControler.js'

console.log(getPosts());
console.log(getPostLength());
// console.log("Hello World");

// // generateRandomNumber = require('./utils.js');

// console.log(`Random Numner :  ${generateRandomNumber()}`);
// console.log(`celciuse to Fahrenheit :  ${celciusToFahrenheit(0)}`);