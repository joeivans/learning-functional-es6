/*
    CHALLENGE:

    - Convert an array into an object.
    - No mutation.
 */

const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley', 'Connor', 'Rick', 'Ashley',
  'Rick', 'Albert', 'Michael', 'Rick', 'Albert', 'Ben', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry', 'Dane', 'Dane', 'Rick',
  'Donna', 'Mortimer',
];

const tallyVotes = (votes) => votes.reduce((tallyObject, vote) => ({
  ...tallyObject,
  [vote]: tallyObject[vote] ? tallyObject[vote] + 1 : 1,
}), {});

console.log(tallyVotes(electionVotes));
