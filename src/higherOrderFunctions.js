/*
    This is just for demonstration.
 */
const divider = (a, b) => a / b;

const checkSafeDivision = (f) => (a, b) => {
  if (b === 0) {
    console.error('Cannot divide by zero.');
    return NaN;
  }
  return f(a, b);
};

const divide = checkSafeDivision(divider);
console.warn(divide(1, 0.0001));
console.warn(divide(1, 0));
console.warn(divide(1, -0.0001));
