# 169. [Majority Element](https://leetcode.com/problems/majority-element/)

Given an array `nums` of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. 

Example 1:  
Input: nums = [3,2,3]  
Output: 3
 
Example 2:  
Input: nums = [2,2,1,1,1,2,2]  
Output: 2

Constraints:  
n == nums.length  
1 <= n <= 5 * 10<sup>4</sup>  
-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

Follow-up: Could you solve the problem in linear time and in O(1) space?

## Solution #1: Boyer-Moore Voting Algorithm

This is the answer to the follow-up question: *Could you solve the problem in linear time and in `O(1)` space?*

### Discussion

**Majority element occurs the highest number of times in an array:**

- If an element, such as a majority element, occurs more than `n/2` times in an array then it is the most "abundant" element in the array. No other element occurs more than the majority element in an array.
- So a counter that increments every time the majority element is encountered and decrements when other elements are encountered will end up being positive.  

**Boyer-Moore Voting Algorithm:**

- Consider an array sliced into a number of suffixes. The first element of a suffix is the probable `candidate` that could be the majority element.

![image](<./images/nikolai-chernichenko-hFBsF-CX5eQ-unsplash.jpg> "Array sliced just like this apple.")

- Now, the traversal starts: the `candidate` is set to the first element of the slice and counter is set to `0`.
- Every time `candidate` is encountered the counter is incremented. Otherwise the `counter` is decremented.
- If the `counter` decrements to `0` then it indicates the end of the current slice. It does not tell us if the `candidate` is the majority element or not.

> It may happen such that even though it is the majority element the element occurs "scarcely" in the first half. But then again, it must occur "abundantly" in the second half since it occurs more than `n/2` times in that array.

- So now, the candidate is set to the first element of the next suffix and the `counter` will be operated as described above: incrementing if candidate is encountered and decrementing if otherwise.
- At the end of the traversal, the element in the `candidate` will be the majority element.

![image](<./images/boyer_moore_demo.png> "Array sliced just like this apple.")

### Algorithm

- Input: `nums`.
- Output: `candidate`.
- Initialize `count` as `0` and `candidate` as `NULL`.
- Traverse the array `nums`.
- If `count` found to to be zero then set `candidate` to `nums[i]`.
- If `count` is non-zero and `candidate` is equal to `nums[i]` increment the `count`.
- If `count` is non-zero and `candidate` is not equal to `nums[i]` decrement the `count`.
- After the traversal of the array, the value of `candidate` is the majority element.


> #### Heads-Up
> In the problem it is given that "the majority element always exists in the array". So only a single pass is made and the last value of the `candidate` is returned.
> If there is no guarantee that the majority element exists in the array, a second pass needs to be made to ascertain it's existence.   
> Second pass would involved counting all the occurrences of the purported majority element (last value of `candidate`) from the first pass. If it occurs more then `n/2` times then it is indeed the majority element.
> Sublinear-space algorithms (space complexity less than `O(n)`) can not ascertain existence of the majority element in a single pass.

### Pseudo Code

```
FUNCTION majorityElement(nums)
	count <- 0
	candidate <- NULL
	
	FOR i IN {0..nums.length-1} DO
		IF count == 0 THEN
			candidate <- num[i]
		
		IF candidate == num[i] THEN
			count <- count + 1
		ELSE
			conut <- count - 1
	
	RETURN candidate
```

### Complexity Analysis

**Time Complexity: `O(n)`**

The array `nums` is traversed once, `O(n)`, along with a constant number of comparisons, assignments and computations, `O(1)`. `O(n+1) is O(n)`.

**Auxiliary Space Complexity: `O(1)`**

A couple variables are created that use a constant amount of auxiliary space `O(1)`.

### JavaScript Implementation

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  
  for(let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    
    if (candidate === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  
  return candidate;
};


```