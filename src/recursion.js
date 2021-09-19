/*
    OBSERVATIONS:

    - A recursive function must have a stop condition that ends recursion.
    - while the stop condition is false, the last logic in the function should
      be to recurse on itself using a different argument.
 */

const countDown = (start) => {
  if (start < 0) return;
  console.log(start);
  countDown(start - 1);
};

const countUp = (start, max) => {
  if (start > max) return;
  console.log(start);
  countUp(start + 1, max);
};

console.log(countDown(10));
console.log(countUp(0, 10));
