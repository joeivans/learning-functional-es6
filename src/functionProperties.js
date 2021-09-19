/*
    OBSERVATIONS:

    - Functions are objects and have properties and methods just like objects.
      - function.name is the name of the function.
      - function.length is the number of arguments.
      - function.toString() is the string representation of the function's code.
      - function.call(thisContext, argCsv) calls the function with args from a
        thisContext.
      - function.apply(thisContext, argArray) calls the function with args as
        an array from a thisContext.
      - function.bind(thisContext, argCsv) allows partial application from a
        thisContext.
 */

const add = (x, y, z) => x + y + z;

console.log(add(1, 2, 3)); // 6

// call
console.log(add.call(null, 1, 2, 3)); // 6

// apply
console.log(add.apply(null, [1, 2, 3])); // 6

// bind - args 1, 2 bound as partial application of add
console.log(add.bind(null, 1, 2)(3)); // 6
