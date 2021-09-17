/*
    Can collect functions in an array.
 */

const double = (a) => a * 2;
const subtractOne = (a) => a - 1;
const triple = (a) => a * 3;
const add5 = (a) => a + 5;

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt,
];

const input = 1.165;
const output = functionsArray.reduce((accumulator, f) => f(accumulator), input);
console.warn(output);
