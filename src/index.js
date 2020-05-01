import baselineFunctions from './baselineFunctions';
import calculateExpectedPerformance from './calculateExpectedPerformance';
import runTests from './runTests';

/**
 * Currently only using one baseline function. This could be extended to support multiple,
 * a choice, or a custom one.
 */
const BASELINE_FUNCTION = baselineFunctions.standard;

export default async function getPerformanceScore(func) {
  const [baseline, target] = await runTests(BASELINE_FUNCTION.func, func);
  return calculateExpectedPerformance(BASELINE_FUNCTION.expectedMsRunTime, baseline, target);
}
