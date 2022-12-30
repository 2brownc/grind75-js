# 238. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

Given an integer array nums, return an array answer such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example 1**

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints**

* 2 <= nums.length <= 10^5
* -30 <= nums[i] <= 30
* The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

**Follow up**

 Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

---

## Solution

### Discussion

The naive solution would involve calculating the product of all the elements of the array and  dividing it with each element of the array to obtain the required result.

```
nums = [1, 2, 3, 4]
arrayProduct <- PRODUCT(nums) // 24
answer <- []

FOR element IN nums DO
	answer.push(arrayProduct / element)
	
// answer = [24, 12, 8, 6]
```

**CONDITION 1: Cannot use division operation**

But now we can not use the division operation. The thing is, in the naive solution, we are "dividing out" the quantity that shouldn't have been there in the first place.

Consider an array `nums = [p, q, r, s, t]`. The product of the array is `arrayProduct=pqrst`. Now the corresponding element for say `q` in the answer is `prst` as in `q` divided out in the arrayProduct `pqrst`.

```
nums   = [p,    q,    r,    s,    t   ]

answer = [qrst, prst, pqst, pqrt, pqrs]
```

So every corresponding element in the answer array, `answer` is the product of elements to the left and right of the element in the array, `nums`, excluding the element itself.

We can achieve that like this:

```
nums      = [p,    q,    r,    s,    t   ]

fromLeft  = [1,    p,    pq,   pqr,  pqrs] \\prefix
fromRight = [qrst, rst,  st,   t,    1   ] \\suffix
answer    = [qrst, prst, pqst, pqrt, pqrs]
\\ product of corresponding elements
\\ of fromLeft and fromRight
```

For `fromLeft` we perform some kind of "cumulative multiplication". The first element of `fromLeft` is `1` because there is nothing to multiply before the first element. Then every subsequent element, `answer[i]` is the product of `nums[i-1]` and `fromLeft[i-1]`.

For `fromRight` you do it from the right side.

Then the required answer array, `answer` is formed by the product of corresponding elements of `fromLeft` and `fromRight`.

**CONDITION 2: Auxiliary space complexity should be `O(1)` i.e. do not use extra memory.**

Except for the answer array, `answer`, no extra memory should be used. So no asymptotically significant memory usage. As in, you can use extra memory as long as it stays constant and does not increase with respect to the given input. 

That means we  can't use `fromLeft` (prefix) and `fromRight` (suffix) arrays. We can only use the `answer` array.

So we will perform operations performed on `fromLeft` and `fromRight` arrays on the `answer` array itself. 

* First we will do a left sweep of array `a` and store the results in the array `answer`.
* First element of `answer` will be `1` since there are no elements prior to `nums[0]`.
* The subsequent elements of `answer`, `answer[i]`, will be product of `nums[i-1]` and `answer[i-1]`.
* Then a sweep in the reverse direction, right sweep, is carried out.
* In the right sweep the last element of `answer` is multiplied with 1 because there is no element after `nums[n - 1]`. (where `nums` has `n` elements)
* Then, every antecedent element, `answer[n]`, is multiplied with `nums[n+1]`
* The resultant `answer` array is the required solution.


```
nums   = [p,    q,    r,    s,    t   ]

answer = [1,    p,    pq,   pqr,  pqrs] // step 1: left sweep

answer = [qrst, prst, pqst, pqrt, pqrs] // step 2: right sweep

```

### Algorithm

* Input: `nums`.
* Output: ``answer`.
* Initiate `prefix` and `postfix` with `1`.
* For every iteration of the left sweep of `nums`, `prefix` is assigned to `answer[i]` and in the same iteration `prefix` is multiplied with `nums[i]` and stored in `prefix`.
* For every iteration of the right sweep of `nums`, `postfix` is multiplied with `answer[i]` and stored in `answer[i]` and in the same iteration `postfix` is multiplied with `nums[i]` and stored in `postfix`.
* The resultant array is the required solution.

### Pseudo Code

```
FUNCTION productExceptSelf(nums) {
	answer <- []	
	prefix <- 1
	postfix <- 1
	
	FOR i IN 0..nums.length DO
		answer[i] <- prefix
		prefix <- prefix * nums[i]
		
	FOR i IN nums.length-1..0 DO
		answer[i] <- answer[i] * prefix
		prefix <- prefix * nums[i]
		
	RETURN answer
}
```

### Complexity Analysis

#### Time Complexity: O(n)

The array `nums` is traversed twice, `O(n+n)` is `O(2n)` is `O(n)`.

#### Auxiliary Space Complexity: O(1)

A couple variables are created that use a constant amount of auxiliary space O(1).  

### JavaScript Implementation

```
function productExceptSelf(nums) {
  const answer = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }  

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= postfix;
    postfix *= nums[i];
  } 

  return answer;
    
};
```