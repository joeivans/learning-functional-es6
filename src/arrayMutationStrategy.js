/*
    OBSERVATIONS:

    - FP prohibits mutations.

    - Some array methods mutate the original array.
      - [].sort() mutates the original array.
      - [].reverse() mutates the original array.
      - [].push() mutates the original array.
      - [].pop() mutates the original array.
 */

const numbers = [10, 1, 2, 0, 3, 4, 5, 6, 7, 9, 8];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (b < a) return -1;
  if (b > a) return 1;
  return 0;
};

const sortedNumbersAscendingWithoutMutation = numbers.slice().sort(ascending);
const sortedNumbersDescendingWithoutMutation = numbers.slice().sort(descending);

console.log(sortedNumbersAscendingWithoutMutation);
console.log(sortedNumbersDescendingWithoutMutation);
console.log(numbers);
