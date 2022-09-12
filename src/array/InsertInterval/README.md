# 57. [Insert Interval](https://leetcode.com/problems/insert-interval/)

You are given an array of non-overlapping intervals `intervals` where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and intervals is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by <code>start<sub>i</sub></code> and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

**Example 1:**  
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]  
Output: [[1,5],[6,9]]

**Example 2:**  
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]  
Output: [[1,2],[3,10],[12,16]]  
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

**Constraints:**

- <code>0 <= intervals.length <= 10<sup>4</sup></code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>5</sup></code>
- <code>intervals is sorted by start<sub>i</sub> in ascending order</code>
- <code>newInterval.length == 2</code>
- <code>0 <= start <= end <= 10<sup>5</sup></code>

## Explanation

