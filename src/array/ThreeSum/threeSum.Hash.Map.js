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

  const numsHash = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsHash.set(nums[i], i);
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }

    for (let j = i + 1; j < nums.length - 1; j++) {
      const addend = (0) - (nums[i] + nums[j]);

      if (
        numsHash.has(addend)
        && numsHash.get(addend) > j
      ) {
        triplets.push([
          nums[i],
          nums[j],
          addend
        ]);
      }

      j = numsHash.get(nums[j]);
    }

    i = numsHash.get(nums[i]);
  }

  return triplets;
}

export { threeSum };