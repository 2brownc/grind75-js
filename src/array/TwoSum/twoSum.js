function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (seen.has(difference) === true) {
      return [seen.get(difference), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};

export { twoSum };