# 57. [Insert Interval](https://leetcode.com/problems/insert-interval/)

You are given an array of non-overlapping intervals `intervals` where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and intervals is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by <code>start<sub>i</sub></code> and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

**Example 1:**  
Input: `intervals` = [[1,3],[6,9]], `newInterval` = [2,5]  
Output: [[1,5],[6,9]]

**Example 2:**  
Input: `intervals` = [[1,2],[3,5],[6,7],[8,10],[12,16]], `newInterval` = [4,8]  
Output: [[1,2],[3,10],[12,16]]  
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

**Constraints:**

- <code>0 <= intervals.length <= 10<sup>4</sup></code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>5</sup></code>
- <code>intervals is sorted by start<sub>i</sub> in ascending order</code>
- <code>newInterval.length == 2</code>
- <code>0 <= start <= end <= 10<sup>5</sup></code>

## Solution

### Discussion

We will traverse the array `intervals` as `interval` and push the newly computed intervals into the required array `updatedIntervals`. `currentInterval` will be the same as `newInterval` but might change if we have to merge any intervals that overlap.

**How do we merge intervals?**    

![images](<./images/mergeInterval.png> "Merging Intervals")

Consider `interval = [4, 6]` and `currentInterval = [3, 5]`. Now the merged interval would be the one encompasses both the intervals as in `[3. 6]` .

Programmatically,

```
interval = [a1, b1]
currentInterval = [a2, b2]

mergedInterval = [min(a1, a2), max(b1,b2)];
```

**Three Scenarios**

The first step in solving this problem is recognizing that each interval that we push to the array `updatedIntervals` will depend on how `interval` stands against the current `currentInterval`. There are three cases.

![image](<./images/cases.png> "Different Cases")

**Case 1**

`interval` occurs before `currentInterval`. So it can be pushed to `updatedIntervals` without any processing.

**Case 2**

`interval` overlaps with `currentInterval`. So now both of these intervals needs to be merged.

**Case 3**

`interval` occurs after the current `currentInterval`. That means the `interval` and all the subsequent elements in `intervals` can be pushed into `udpatedIntervals`.

Once we traverse through `intervals` deciding which interval needs to be pushed to `udpatedIntervals` according to the above cases then we will have successfully completed the task.

## Algorithm

- Input: `intervals`, `newInterval`
- Traverse the array `intervals`.
- Now we will deal with intervals that fit any of the three cases mentioned above, if they exist.
- First push, if any exist, all intervals that fit "Case 1"  i.e. ones that occur before `newInterval` into `updatedIntervals`. 
- Then intervals that fit "Case 2" i.e. the intervals that overlap with `newInterval` or other subsequent intervals maybe encountered. Merge and push them into `updatedIntervals`.
- Now only intervals that that fit "Case 3", ones that occur after `newInterval` and do not overlap might be present. Push all of them into `updatedIntervals`.
- `updatedIntervals` is the required array that will be returned after the traversal of `intervals` is completed.

## Pseudo Code

```
FUNCTION insert(intervals, newInterval)
	updatedIntervals <- []
	currentInterval <- newInterval
	index <- 0
	
	/* CASE 1 */
	WHILE
		index < intervals.length
		AND
		intervals[index][1] < currentInterval[index]
	DO
	  	updatedIntervals.push(currentInterval)
		index <- index + 1

	/* CASE 2 */
	WHILE
		index < intervals.length
		AND
		intervals[index][0] <= currentInterval[1]
	DO
	    currentInterval[0] <- MIN(
	      intervals[index][0],
	      currentInterval[0]
	    )
	    currentInterval[1] <- MAX(
	      intervals[index][1],
	      currentInterval[1]
	    )
	
	    index <- index + 1

	updatedIntervals.push(currentInterval)

	/* CASE 3 */	
	WHILE index < intervals.length DO
		updatedIntervals.push(intervals[index])
		index <- index + 1
	
	RETURN updatedIntervals
```

### Complexity Analysis

**Time Complexity: `O(n)`**

The array `interval` will be traversed once so the time complexity is `O(n)`.

**Auxiliary Space Complexity: `O(n)`**

A new array `updatedIntervals` is constructed required memory allocation. Also a few variables that take up constant space are created.

At worst case it's length is `n+1` because `newInterval` doesn't not overlap any intervals in `intervals` and is simply added in the appropriate place. So worst case auxiliary space complexity is `O(n)`.

Best case is when `newInterval` would cause all the intervals to merge into a single interval. So best case auxiliary space complexity is `O(1)`.


## JavaScript Implementation

```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const updatedIntervals = [];
  let currentInterval = newInterval;
  let index = 0;

  while (
    index < intervals.length
    && intervals[index][1] < currentInterval[0]
  ) {
    updatedIntervals.push(intervals[index]);
    index += 1;
  }

  while (
    index < intervals.length
    && intervals[index][0] <= currentInterval[1]
  ) {
    currentInterval[0] = Math.min(
      intervals[index][0],
      currentInterval[0]
    );
    currentInterval[1] = Math.max(
      intervals[index][1],
      currentInterval[1]
    );

    index += 1;
  }

  updatedIntervals.push(currentInterval);

  while (index < intervals.length) {
    updatedIntervals.push(intervals[index]);
    index += 1;
  }

  return updatedIntervals;
};
```