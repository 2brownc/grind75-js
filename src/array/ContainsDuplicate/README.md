# 217. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

**Example 1:**  
Input: nums = [1,2,3,1]  
Output: true

**Example 2:**  
Input: nums = [1,2,3,4]  
Output: false

**Example 3:**  
Input: nums = [1,1,1,3,3,4,3,2,4,2]  
Output: true 

**Constraints:**  
1 <= nums.length <= 10<sup>5</sup>  
-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## Solution

### Discussion

A hash map cloud be used to keep track of the elements in the input array `nums`. As we traverse through the `nums` we will check if each element is seen before by checking if it exits in a hash map. If not we will insert it into the hash map so if this same number is encountered during the iteration of `nums` we will know it's a duplicate.

### Algorithm

- Input: `nums`
- Each element in the input array `nums` is checked against a hash map `seen`.
- If the element exits in `seen` then it is a duplicate and `true` is returned.
- If not then it is inserted into `seen`.
- If none of the elements are to be found in `seen` as the traversal of `nums` ends `false` is returned to indicate no duplicate.


### Pseudo Code

```
FUNCTION containsDuplicate(nums)
  seen <- MAP \\ a hash map 

  FOR num OF nums DO
    IF seen[num] == TRUE THEN
      RETURN TRUE
  ELSE
    seen[num] <- TRUE

  RETURN FALSE
```

### Complexity Analysis

**Time Complexity: `O(n)`**

At worst there is no duplicate elements and the program has to traverse the whole array `nums` which is of length `n`. So time complexity is `O(n)` at worst case.

**Auxiliary Space Complexity: `O(n)`**

Again at the worst there are no duplicate elements and the program has to traverse the whole array `nums`. In this process the hash map `seen` will be populated with all the `n` elements of the array. So auxiliary space complexity is `O(n)` at worst case.

In contrast if the first two elements are the same in the array as in `nums = [2, 2, 3, ...]` then the time complexity will be `O(2)` which is `O(1)`. And auxiliary space complexity will be `O(1)` since there will be one element in the hash map `seen`. This is the best case.

### JavaScript Implementation

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */

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
```
