/**
 * This calculates the expected performance of the function, based on comparison
 * to a baseline.
 *
 * @param {number} baselineExpected - ms that the baseline function should take to run
 * @param {number} baselineActual - ms that the baseline function actually took to run
 * @param {number} target - ms that the target function took to run
 *
 * @returns {number}
 */
export default function calculateExpectedPerformance(baselineExpected, baselineActual, target) {
  const performanceRatio = baselineActual / baselineExpected;
  return target / performanceRatio;
}
