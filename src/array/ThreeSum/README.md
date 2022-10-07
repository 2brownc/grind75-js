# 15. [3Sum](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

Input: nums = [-1,0,1,2,-1,-4]  
Output: [[-1,-1,2],[-1,0,1]]  
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.  
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.  
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.  
The distinct triplets are [-1,0,1] and [-1,-1,2].

Notice that the order of the output and the order of the triplets does not matter.


**Example 2:**

Input: nums = [0,1,1]  
Output: []

Explanation: The only possible triplet does not sum up to 0.

**Example 3:**

Input: nums = [0,0,0]  
Output: [[0,0,0]]

Explanation: The only possible triplet sums up to 0.
 
**Constraints:**

- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

## Solution #1: Two Pointers

### Discussion

*Sort the array:*

First the array, `nums`, should be sorted (ascending) so it will help with:
- Skipping duplicates: Since `nums` is sorted all the duplicates will be next to each other.
- Picking required elements: If we move to the right of the array the elements will be of higher value and vice versa. This will help in picking elements such that the sum is `0`.

*Base Cases:*

- If the `nums` contains less than tree elements return `[]`; because a sum of three elements is required.
- If `nums[0] > 0` return `[]`; because sum of positive numbers is never `0`.
- If `nums[-1] < 0` return `[]`; because sum of negative numbers is never `0`.
- While traversing through the `nums` if `pivot` is greater then zero return `[]`; because even the later numbers will be positive and the sum of positive numbers is never `0`.

*Select a pivot:*

While traversing through `nums` each element is considered as a `pivot`. If there are duplicates select the last one as `pivot`.

*Select `low` and `high` pointers:*

Then traverse the remaining section of `nums` with two pointers `low` which is at the start of the section and `high` which is at the `end`.

*Adjust `low` and `high` pointers so the `sum` is `0`:*

Check the `sum` of `pivot`, `low` and `high`. If the `sum` is positive the value of `high` is too `high` so move it left. If the `sum` is negative the value of `low` is too low move it to the right. 

*Add the triplets to the result array:*

If the sum is `0` add the triplet to the results array, `triplets`.

*`triplets` contains the solution:*

- After making sure any duplicate values of `low` and `high` are skipped continue the traversal.
- After the traversal, `triplets` contains the solution.

### Algorithm

- Input: `nums`
- Output: `triplets`
- While traversing the array `nums`, consider an element `nums[pivot]`; skip any duplicates of the element.
- Now select two pointers `nums[low]` and `nums[high] where `low = pivot + 1` and `high = nums.length - 1`. So at the start and end of the remaining array after `nums[pivot]`
- Consider `sum = nums[pivot] + nums[low] + nums[high]`.
- If `sum` is positive, decrement `high`.
- If `sum` is negative, increment `low`.
- If `sum` is `0` add `nums[pivot]`, `nums[low]` and `nums[high]`to the result array `triplets`.
- Skip any duplicates of `low` and `high`.
- The array `triplets` at the end of the traversal of `nums` is the required output.

### Pseudo Code

```
FUNCTION threeSum(nums)
  /*
    base case
    if there are less than 3 elements
    then we can't find sum of 3 elements
  */
  IF nums.length < 3 THEN
    RETURN []
    
  /*
    base case
    if nums consists of all
    positive or negative numbers
    the sum can never be zero
  */
  IF nums[0] > 0 || nums[-1] < 0 THEN
    RETURN []
        
  triplets <- []
  
  // sort in ascending order
  nums <- SORT(nums)
  
  /*
    base case
    if all numbers are positive
    then sum of them can't be 0
  */
  IF nums[0] > 0 THEN
    RETURN []
  
  FOR pivot IN {0..nums.length-1} DO
    /*
      base case
      If the pivot is greater than `0`
      then so will be the
      low and high pointers.
      And sum of positive numbers
      is never `0`.      
    */
    IF nums[pivot] > 0 THEN
      BREAK

    IF
      pivot > 0
    AND
      /*
        if there are a sequence of
        duplicate elements then
        consider only the first element
        skip the rest
      */
      nums[pivot] == nums[pivot - 1]
    THEN
      CONTINUE
  
  low <- pivot + 1
  high <- nums.length - 1
  
  WHILE low < high DO
    sum <- nums[pivot] + nums[low] + nums[high]
    
    IF sum == 0 THEN
      truplets.push([
        nums[pivot],
        nums[low],
        nums[high]      
      ])
    
      /*
        skip duplicates of
        low and high pointers
      */
      WHILE
        low < nums.length
      AND
        nums[low] == nums[low+1]
      DO
        low <- low + 1
  
      WHILE
        high > 0
      AND
        nums[high] == nums[high-1]
      DO
        high <- high + 1
  
      low <- low + 1
      high <- high - 1
      
      CONTINUE
  
    /*
      adjust the pointers
      such that the sum is 0
    */
    IF sum > 0 THEN
      high <- high - 1
    
    IF sum < 0 THEN
      low <- low - 1

  RETURN triplets
  
```

### Complexity Analysis

**Time Complexity: <code>O(n<sup>2</sup>)</code>**

The array `nums` is traversed twice: once for the value `pivot` and again, inside the previous loop, for the two pointers `low` and `high`.


**Auxiliary Space Complexity: `O(n)`**

A new array `triplets` is created. At worst case, all the elements in the `nums` array can be pushed into `triplets`.

### JavaScript Implementation

```js
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

  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (nums[pivot] > 0) {
      break;
    }
    
    if (
      pivot > 0
      && nums[pivot] === nums[pivot - 1]
    ) {
      continue;
    }

    let low = pivot + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[pivot] + nums[low] + nums[high];

      if (sum === 0) {
        triplets.push([
          nums[pivot],
          nums[low],
          nums[high]
        ]);

        while (
          low < nums.length
          && nums[low] === nums[low + 1]
        ) {
          low += 1;
        }

        while (
          high >= 0
          && nums[high] === nums[high - 1]
        ) {
          high -= 1;
        }

        low += 1;
        high -= 1;

        continue;
      }

      if (sum > 0) {
        high -= 1;
      }

      if (sum < 0) {
        low += 1;
      }

    }
  }

  return triplets;
}

```

## Solution #2: Hash Map
 
### Discussion

*Sort the Array:*

First the array, `nums`, should be sorted (ascending) so it will help with:
- Base cases: It will be easy to identify if the `nums`  contains all positive or negative numbers.
- Avoid duplicates: When the hash map is created only the last entry of the `(index, value)` pair from `nums` is stored in it.

```
> array
[
  1, 2, 2, 3,
  4, 5, 5, 6
]

> array.forEach((v, i) => hashmap.set(v, i))

> hashmap
Map(6) { 1 => 0, 2 => 2, 3 => 3, 4 => 4, 5 => 6, 6 => 7 }
```

*Base Cases:*

- If the `nums` contains less than tree elements return `[]`; because a sum of three elements is required.
- If `nums[0] > 0` return `[]`; because sum of positive numbers is never `0`.
- If `nums[-1] < 0` return `[]`; because sum of negative numbers is never `0`.
- While traversing through the `nums` if `pivot` is greater then zero return `[]`; because even the later numbers will be positive and the sum of positive numbers is never `0`.

*Create a Hash Map:*

Create a hash map, `numsHash`, mapping values to indices from the array `nums`. It will be helpful in:
- Ascertaining if a value exits in `nums` .
- Quickly, in `O(1)` time, get the index of a value in `nums`.
- Skip duplicates: Only the last occurrence, as in the index,  of a value is stored in `numsHash`.

*Check if the Addend Exists:*

- The requirement is to find the sum of three numbers in `nums` such that their sum is `0` as in `addend1 + addend2 + addend3 = 0`.
- Traverse `nums` using two loops and select `addend1` and `addend2` from each loop.
- So the third term, `addend3`, can be determined by `addend3 = 0 - (addend1 + addend2)`.
- Check if `addend3` exist in `nums` using the hash `numsHash`.
- If `addend3` exists push `[addend1, adddend2, addend3]` into `triplets`.
- But make sure `addend3 > addend2` to avoid duplicates like this: `[-1, 2, -1]` is a duplicate of `[-1, -1, 2]`. 

*Skip the Duplicates:*

- The solution set must not contain duplicate triplets so make sure to skip any duplicates of `addend1` and `addend2` in `nums`.
- Since `addend3` is obtained from `numsHash` only last instance of the value is retrieved, so no issue of duplicates.
- Similarly use `numsHash` to skip duplicates of `addend1` and `addend2.`
- If the entries of all the triplets are in ascending order then it is a good indication that there are no duplicate triplets.
- That is why `nums` is sorted. Then `addend1` is selected from the array first. Then `addend2` is selected from the subsection of array after `addend1`. Then `addend3` is selected from the remaning subsection after `addend2`. As you can see  `addend1 <= addend2 <= addend3`.

*`triplets` contains the solution:*

- After the traversal ends, `triplets` contains the solution.

### Algorithm

- Input: `nums`
- Output: `triplets`
- Create a hash, `numsHash` mapping value to index using entries from `nums`.
- While traversing the array `nums` using two loops with each loop having `addend1` and `addend2` as current element.
- Check `addend3` i.e. `addend3 = 0 - (addend1 + addend2)` exists in `nums` using created hash, `numsHash`.
- If `addend3` exists and is less than `addend2` push `[addend1, addend2, addend3]` into `triplets`.
- Avoid duplicates: Skip to the last entry of `addend1` and `addend2` in `nums` using `numsHash`. Then continue the traversal of `nums`.
- Return `triplets`.

### Pseudo Code
```
addend1 ~ nums[i]
addend2 ~ nums[j]
addend3 ~ addend
```

```
FUNCTION threeSum(nums)
  IF nums.length < 3 THEN
    RETURN []
  
  triplets <- []
  
  // sort numerically in ascending order
  nums <- SORT(nums)
  
  IF
    nums[0] > 0
  OR
    nums[-1] < 0
  THEN
    RETURN []
  
  numsHash <- MAP
  
  FOR i IN {0..nums.length - 1} DO
    numsHash.set(nums[i], i)
  
  
  FOR i IN {0..nums.length - 3} DO
    IF nums[i] > 0 THEN
      BREAK
      
    FOR j in {0..nums.length - 2} DO
      addend <- 0 - (nums[i] + nums[j])
      /*
        or,
        addend <- - nums[i] - nums[j]
      */

      IF
        numsHash.has(addend)
      AND
        numsHash.get(addend) > j
      THEN
        triplets.push([
          nums[i],
          nums[j],
          addend
        ])
      
      j <- numsHash.get(nums[j])

    i <- numsHash.get(nums[i])
    
  RETURN triplets
```

### Complexity Analysis

**Time Complexity: <code>O(n<sup>2</sup>)</code>**

The array `nums` is traversed twice in two nested loops. 

**Auxiliary Space Complexity: `O(n)`**

- A hash map, `numsHash`, of `nums` is created. The worst case is there are no duplicates in `nums` and all the entries are mapped in `numsHash`.

- A new array `triplets` is created. At worst case, all the elements in the `nums` array can be pushed into `triplets`.

- So `O(n+n) is O(n)`.


### JavaScript Implementation

```js  
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

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

};
```
