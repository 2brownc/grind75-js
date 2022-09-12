import { insert } from './insert';

const knownTests = [
  [[[1, 3], [6, 9]], [2, 5], [[1, 5], [6, 9]]],
  [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8], [[1, 2], [3, 10], [12, 16]]],
];

const prepareTests = knownTests.map(array => ({
  intervals: array[0],
  newInterval: array[1],
  expected: array[2],
})
);

describe.each(prepareTests)(
  `Insert Interval:
    intervals=$intervals,
    newInterval=$newInterval,
    expected=$expected`,
  ({ intervals, newInterval, expected }) => {
    test(
      `returns intervals after inserting given interval`, () => {
        expect(insert(intervals, newInterval)).toEqual(expected);
      }
    )
  }
);