import useMultiPossibility from 'use-multi-possibility';
import getPerformanceScore from '../../src';

jest.mock('../../src/perfTest', () => ({
  __esModule: true,
  default: () => 100,
}));

describe('getPerformanceScore', () => {
  it('should return the performance score of the function', async () => {
    const score = await getPerformanceScore(() => {});
    expect(score).toBe(12);
  });

  useMultiPossibility(([arg]) => {
    it('should throw an error if the argument is not a function', async () => {
      expect(async () => getPerformanceScore(arg)).rejects.toThrow();
    });
  }, [[undefined, null, NaN, [], {}, 0, '']]);
});
