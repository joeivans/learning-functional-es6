/*
    Ternaries can be used for clean branching in FP.
 */

/**
 * Constant condition example to illustrate basic use.
 * @type {{(): void, (): void}}
 */
const constantCondition = true
  ? () => console.warn('First option')
  : () => console.warn('Second option');

/*
    Here's an example of branching on a pragma.

    If you had an algorithm that ran based on the environment pragma.
 */

const DEVELOPMENT_PRAGMA = true;

const fetchDataReal = () => {
  // time-intensive operations
};

const fetchDataFake = () => ({
  name: 'Joe',
  age: 40,
});

const fetchData = DEVELOPMENT_PRAGMA
  ? fetchDataFake
  : fetchDataReal;

fetchData();
