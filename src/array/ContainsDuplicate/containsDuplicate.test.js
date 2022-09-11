import { containsDuplicate } from './containsDuplicate';

const knownTests = [
  [[1, 2, 3, 1], true],
  [[1, 2, 3, 4], false],
  [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
];

const prepareTests = knownTests.map(array => ({
  nums: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `Contains Duplicate:
    nums=$nums,
    expected=$expected`,
  ({ nums, expected }) => {
    test(
      `are there duplicate elements in the array`, () => {
        expect(containsDuplicate(nums)).toEqual(expected);
      }
    )
  }
);