/*
    OBSERVATIONS:

    - [].slice(a, b) => a inclusive, b exclusive.
      - i.e., [].slice(3, 8) means start at index 3, stop before index 8.
      - [].slice() without args means copy the entire array.

    - Slice is not a higher-order function.

    - Slice does not mutate the original array but creates a copy.

    - Functional programming prohibits mutation.
    - Slice can be used to work around mutation limits.
      - Use slice before calling mutating methods to get a copy of the original
        array instead of mutating the original array.
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedNumbers = numbers.slice().reverse();
console.log(numbers, reversedNumbers);
