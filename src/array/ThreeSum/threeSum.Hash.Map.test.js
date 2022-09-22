import { threeSum } from './threeSum.Hash.Map';

const knownTests = [
  [[-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]],
  [[0, 1, 1], []],
  [[0, 0, 0], [[0, 0, 0]]],
  [[0, 0, 0, 0], [[0, 0, 0]]],
  [[-2, 0, 0, 2, 2], [[-2, 0, 2]]],
  [[-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4], [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]]],
];

const prepareTests = knownTests.map(array => ({
  nums: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `3 Sum:
    nums=$nums,
    expected=$expected`,
  ({ nums, expected }) => {
    test(
      `return all triplets whose sum is zero`, () => {
        expect(threeSum(nums)).toEqual(expected);
      }
    )
  }
);