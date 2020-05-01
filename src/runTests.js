import getScore from './getScore';

/**
 * This compares the target function's performance against a
 * known baseline function.
 *
 * @param {function} baselineFunc - the known baseline function to compare against
 * @param {function} targetFunc - the target function to test
 *
 * @returns {number[]}
 */
export default async function runTests(baselineFunc, targetFunc) {
  /**
   * Tests deliberately run in sequence to catch performance changes over time
   */
  const initialBaselineScore = await getScore(baselineFunc);
  const initialTargetScore = await getScore(targetFunc);
  const midwayBaselineScore = await getScore(baselineFunc);
  const endTargetScore = await getScore(targetFunc);
  const endBaselineScore = await getScore(baselineFunc);

  const totalBaselineScore = (initialBaselineScore + midwayBaselineScore + endBaselineScore) / 3;
  const totalTargetScore = (initialTargetScore + endTargetScore) / 2;

  return [totalBaselineScore, totalTargetScore];
}
