/*
    OBSERVATIONS:

    - Partial Application means 'partially apply'.
    - Passing in partial arguments one at a time is called 'currying'.

    - The trick here is to return a function which returns a function until the
      call chain ends with a value.
 */

const add = (x, y, z) => x + y + z;
const addPartial = (x) => (y) => (z) => add(x, y, z);

console.log(addPartial(1)(2)(3)); // 6
