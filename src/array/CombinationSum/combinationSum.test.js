import { combinationSum } from './combinationSum.js'

const knownTests = [
  [[2, 3, 6, 7], 7, [[2, 2, 3], [7]]],
  [[2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]],
  [[2], 1, []]
];

const prepareTests = knownTests.map(array => ({
  candidates: array[0],
  target: array[1],
  expected: array[2]
})
);

describe.each(prepareTests)(
  `Combination Sum:
    candidates=$candidates,
    target=$target,
    expected=$expected`,
  ({ candidates, target, expected }) => {
    test(
      `return list of all unique combinations of target`, () => {
        expect(combinationSum(candidates, target)).toEqual(expected);
      }
    )
  }
);