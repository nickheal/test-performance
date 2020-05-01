/**
 * This runs a single performance test of a function
 *
 * @param {function} func - the function to be tested
 *
 * @returns {number}
 */
export default async function perfTest(func) {
  const start = performance.now();
  await func();
  const end = performance.now();
  return end - start;
}
