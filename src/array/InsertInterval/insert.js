function insert(intervals, newInterval) {
  const updatedIntervals = [];
  let currentInterval = newInterval;
  let index = 0;

  while (
    index < intervals.length
    && intervals[index][1] < currentInterval[0]
  ) {
    updatedIntervals.push(intervals[index]);
    index += 1;
  }

  while (
    index < intervals.length
    && intervals[index][0] <= currentInterval[1]
  ) {
    currentInterval[0] = Math.min(
      intervals[index][0],
      currentInterval[0]
    );
    currentInterval[1] = Math.max(
      intervals[index][1],
      currentInterval[1]
    );

    index += 1;
  }

  updatedIntervals.push(currentInterval);

  while (index < intervals.length) {
    updatedIntervals.push(intervals[index]);
    index += 1;
  }

  return updatedIntervals;
}

export { insert };