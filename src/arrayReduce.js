/*
    OBSERVATIONS:

    - [].reduce((accumulator, element)) => { ... return ... }, startingAccumulatorState);

    - [].reduce does not mutate the input array.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((accumulator, element) => accumulator + element, 0);
const product = numbers.reduce((accumulator, element) => accumulator * element, 1);
console.log(sum); // 55
console.log(product); // 3628800
