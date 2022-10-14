import { productExceptSelf } from './productExceptSelf';

const knownTests = [
  [[1, 2, 3, 4], [24, 12, 8, 6]],
  /*
  -0 !== 0
  [[-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]],
  */
  [[1, -1], [-1, 1]],
];

const prepareTests = knownTests.map(array => ({
  nums: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `Product of Array Except Self:
    nums=$nums,
    expected=$expected`,
  ({ nums, expected }) => {
    test(
      `return an array answer such that
      answer[i] is equal to the
      product of all the elements of nums
      except nums[i]`, () => {
      expect(productExceptSelf(nums)).toEqual(expected);
    }
    )
  }
);