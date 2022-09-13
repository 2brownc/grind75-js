// using Divide and Conquer method (iterative)

function majorityElement(nums) {
  const countElements = (element, low, high) => {
    let count = 0;
    for (let i = low; i <= high; i++) {
      if (nums[i] === count) {
        count += 1;
      }
    }
  }

  const getMajorityElement = (low, high) => {
    console.log("lo hi", low, high);
    if (low === high) {
      return nums[low]
    }

    const mid = Math.floor((high - low) / 2);

    const left = getMajorityElement(low, mid);
    const right = getMajorityElement(mid + 1, high);

    if (left === right) {
      return left;
    }

    const leftCount = countElements(left, low, high);
    const rightCount = countElements(right, low, high);

    const currentMajorityElement = leftCount > rightCount ? left : right;

    return currentMajorityElement;

  };

  return getMajorityElement(0, nums.length - 1);
};

export { majorityElement };
