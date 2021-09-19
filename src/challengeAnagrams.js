/*
    CHALLENGE:

    - Find all the anagrams for the given input word.
    - Functional restrictions apply.
 */

import words from 'an-array-of-english-words';

const findAnagrams = (word, allWords) => {
  const letters = word.split('').sort();

  return allWords.filter((_word) => _word.length === word.length
    && _word.split('').sort().toString() === letters.toString()
    && _word !== word);
};

console.log(findAnagrams('cinema', words)); // ['iceman', 'anemic']
