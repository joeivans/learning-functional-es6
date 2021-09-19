/*
    OBSERVATIONS:

    - You can use implicit arguments to pass to higher-order functions.
    - If higher-order functions take many arguments, you can still use implicit
      arguments.
      - You just need the higher-order function call chain to have a one-to-one
        relationship with the number of arguments passed.
 */
const words = [
  'hello',
  'goodbye',
  'the',
  'Antarctica',
];

// {len scope} => {word scope} => {function body scope}
const stringIsLongerThan = (len) => (word) => word.length > len;
const longWords = words.filter(stringIsLongerThan(5));

console.log(longWords);
