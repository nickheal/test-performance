import getPerformanceScore from '../../src';

jest.mock('../../src/perfTest', () => ({
  __esModule: true,
  default: () => 100,
}));

describe('getPerformanceScore', () => {
  it('should...', async () => {
    const score = await getPerformanceScore(() => {});
    expect(score).toBe(12);
  });
});
