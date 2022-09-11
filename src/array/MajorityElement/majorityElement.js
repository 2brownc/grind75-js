function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (candidate === num) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};

export { majorityElement };
