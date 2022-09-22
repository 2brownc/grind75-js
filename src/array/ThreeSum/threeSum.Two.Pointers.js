function threeSum(nums) {
  if (nums.length < 3) {
    return [];
  }

  const triplets = [];

  nums.sort((a, b) => a - b);

  if (
    nums[0] > 0
    || nums[nums.length - 1] < 0
  ) {
    return [];
  }

  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (nums[pivot] > 0) {
      break;
    }

    if (
      pivot > 0
      && nums[pivot] === nums[pivot - 1]
    ) {
      continue;
    }

    let low = pivot + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[pivot] + nums[low] + nums[high];

      if (sum === 0) {
        triplets.push([
          nums[pivot],
          nums[low],
          nums[high]
        ]);

        while (
          low < nums.length
          && nums[low] === nums[low + 1]
        ) {
          low += 1;
        }

        while (
          high >= 0
          && nums[high] === nums[high - 1]
        ) {
          high -= 1;
        }

        low += 1;
        high -= 1;

        continue;
      }

      if (sum > 0) {
        high -= 1;
      }

      if (sum < 0) {
        low += 1;
      }

    }
  }

  return triplets;
}

export { threeSum };