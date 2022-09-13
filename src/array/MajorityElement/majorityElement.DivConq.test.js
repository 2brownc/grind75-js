import { majorityElement } from './majorityElement.DivConq';

const knownTests = [
  [[3, 2, 3], 3],
  [[2, 2, 1, 1, 1, 2, 2], 2],
  [[3, 3, 4], 3]
];

const prepareTests = knownTests.map(array => ({
  nums: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `Majority Element:
    nums=$nums,
    expected=$expected`,
  ({ nums, expected }) => {
    test(
      `majority element in the array`, () => {
        expect(majorityElement(nums)).toEqual(expected);
      }
    )
  }
);