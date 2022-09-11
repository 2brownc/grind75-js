import { maxProfit } from './maxProfit';

const knownTests = [
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
];

const prepareTests = knownTests.map(array => ({
  prices: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `Best Time to Buy and Sell Stock:
    prices=$prices,
    expected=$expected`,
  ({ prices, expected }) => {
    test(
      `the maximum profit you can
      achieve from this transaction`, () => {
      expect(maxProfit(prices)).toEqual(expected);
    }
    )
  }
);