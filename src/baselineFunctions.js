export default {
  standard: {
    expectedMsRunTime: 12,
    func: (dummyParam) => {
      function test() {}

      const a = dummyParam || Math.random();

      if (a > 0.5) {
        test();
      } else {
        test();
      }
    },
  },
};
