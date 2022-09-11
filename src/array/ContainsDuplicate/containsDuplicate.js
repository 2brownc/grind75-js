function containsDuplicate(nums) {
  const seen = new Map();

  for (const num of nums) {
    if (seen.get(num) === true) {
      return true;
    } else {
      seen.set(num, true);
    }
  }

  return false;
};

export { containsDuplicate };