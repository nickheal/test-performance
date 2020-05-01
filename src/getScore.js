import perfTest from './perfTest';

const NUMBER_OF_TESTS = 10000;

/**
 * This function runs the performance test 10,000 times, and returns
 * the average in milliseconds.
 *
 * @param {function} func - the function to be scored
 *
 * @returns {number}
 */
export default async function getScore(func) {
  const tests = new Array(NUMBER_OF_TESTS).fill().map(async () => perfTest(func));
  const results = await Promise.all(tests);
  return results.reduce((acc, val) => acc + val, 0) / NUMBER_OF_TESTS;
}
