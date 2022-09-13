// using Divide and Conquer method (iterative)

function countElements(low, high, element, array) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (array[i] === element) {
      count += 1;
    }
  }
  return count;
}

function getMajorityElement(low, high, array) {
  if (low === high) {
    return array[low];
  }

  const mid = low + Math.floor((high - low) / 2);

  const left = getMajorityElement(low, mid, array);
  const right = getMajorityElement(mid + 1, high, array);

  if (left === right) {
    return left;
  }

  const leftCount = countElements(low, high, left, array);
  const rightCount = countElements(low, high, right, array);

  const currentMajorityElement = leftCount > rightCount ? left : right;

  return currentMajorityElement;

};

function majorityElement(nums) {
  const low = 0;
  const high = nums.length - 1;
  return getMajorityElement(low, high, nums);
};

export { majorityElement };
