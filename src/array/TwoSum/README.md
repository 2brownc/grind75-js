# 1. [Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

**Example 1:**  
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

**Example 2:**  
Input: nums = [3,2,4], target = 6  
Output: [1,2]

**Example 3:**  
Input: nums = [3,3], target = 6  
Output: [0,1]  

**Constraints:**  
2 <= nums.length <= 10<sup>4</sup>  
-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>  
-10<sup>9</sup> <= target <= 10<sup>9</sup>

Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n<sup>2</sup>) time complexity?

## Solution

### Discussion

In an array `nums` we need to find two elements such at that `nums[i] + nums[j] = target` or `target - nums[j] = nums[i]`. So while traversing `nums` we check if there is a corresponding <code>j<sup>th</sup></code> element for the current <code>i<sup>th</sup></code> element. If there exists one then we can return either `[i, j]` or `[j, i]`.

### Algorithm

- We will traverse `nums` and during every iteration , `i`, we will check if we would come across two elements `i` and `j` such that  `nums[i] + nums[j] = target` which is `target - nums[j] = nums[i]`.
- We will check if corresponding `nums[j]` is present in `seen`.
- If `nums[j]` is found in `seen` then we return `[i, j]`.
- If `nums[j]` is not found in `seen` then we will store `nums[i]` in seen and continue traversing `nums`.

### Pseudo Code

```
FUNCTION twoSum(nums, target)
	seen <- MAP
	
	FOR i IN {0..nums.length-1} DO
		difference <- target - nums[i]
		IF difference IN seen THEN
			RETURN [seen[difference], i]
		ELSE
			seen[nums[i]] <- i;
```

### Complexity Analysis

**Time Complexity: `O(n)`**

The input array `nums` is traversed once in the worst case. So time complexity is `O(n)`

**Auxiliary Space Complexity: `O(1)`**

In the worst case the program has to traverse to the end of the array `nums` for `difference` the hash map will be populated to a length of `n-1`. So auxiliary space complexity at the worst case is `O(1)`.

### JavaScript Implementation

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const seen = new Map();
  
  for(let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    
    if (seen.has(remaining) === true) {
      return [seen.get(remaining), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};
```
