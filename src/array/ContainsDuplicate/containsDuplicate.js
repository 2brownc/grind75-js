function containsDuplicate(nums) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (seen.get(nums[i]) === true) {
      return true;
    } else {
      seen.set(nums[i], true);
    }
  }

  return false;
};

export { containsDuplicate };