import {TwoSum} from './TwoSum';

const knownTests = [
  [[2,7, 11, 15], 9, [0,1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]]
];

const prepareTests = knownTests.map(array => ({
    nums: array[0],
    target: array[1],
    expected: array[2],
  })
);

describe.each(prepareTests)(
  `Two Sum:
    nums=$nums,
    target=$target,
    expected=$expected`,
  ({nums, target, expected}) => {
    test(
      `return indices of the two numbers
      such that they add up to target`, () => {
        expect(TwoSum(nums, target)).toEqual(expected);
      }
    )
  }
);