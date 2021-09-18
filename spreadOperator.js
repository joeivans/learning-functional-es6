/*
    OBSERVATIONS:

    - If spreading two objects that have key intersection, the last one wins.
    - Therefore, you can update an object property using the spread operator.
 */

const person = {
  name: 'Joe',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  title: 'developer',
  company: 'joeivans.dev',
};

const personWithCareerData = {
  ...person,
  ...careerData,
};

const personNameWithCareerData = {
  name: person.name,
  ...careerData,
};

const updatedPersonWithCareerData = {
  ...person,
  ...careerData,
  title: 'senior developer',
};

console.log(personWithCareerData);
console.log(personNameWithCareerData);
console.log(updatedPersonWithCareerData);
