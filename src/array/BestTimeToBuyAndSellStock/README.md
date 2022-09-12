# 121. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

You are given an array prices where `prices[i]` is the price of a given stock on the <code>i<sup>th</sup></code> day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

 

**Example 1:**  
Input: prices = [7,1,5,3,6,4]  
Output: 5  
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.  
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.  

**Example 2:**  
Input: prices = [7,6,4,3,1]  
Output: 0  
Explanation: In this case, no transactions are done and the max profit = 0.

**Constraints:**  
1 <= prices.length <= 10<sup>5</sup>  
0 <= prices[i] <= 10<sup>4</sup>  

## Solution

### Discussion

- As we are presented with `prices` of a stock from day `1` to `n` we need to find two days where the stock is at the lowest price and at the highest price respectively.
- But not only that, the day we buy the stock should occur before the the day we sell the stock. Even if you chose to eat the cake you should have it first!
- So we will traverse `prices` in reverse, always considering the day with highest price as selling day, `highestSell`.
- Then if there exists a day with the lowest price after the selling day then we select it as the day to buy. The `profit` will be the difference between price of the stock on selling day and buying day.
- If a day with a price lower than the selling day does not exit then the `profit` is returned as `0`.

![image](<./images/stock_graph.svg> "Daily prices of the stock.")

### Algorithm

As we recall each entry in `profit` has an index and a value. The index represents the day and value represents the value of the price on that particular day.

1. We will set  `highestSell` as the last element of `array`.
2. We will also set `profit` as `0`.
3. As we traverse the `prices` in reverse we will always set the highest price we encounter as `highestSell`.
4. If we encounter a price lower then `highestSell` we will calculate the difference between them.
5. The difference if set as `profit` if it is higher than profit.
6. Once the traversal is finished the value of `profit` will be the maximum possible profit. `profit` is returned.

### Pseudo Code

```
FUNCTION maxProfit(prices)
  highestSell <- prices[-1]
  profit <- 0
  
  FOR i in {prices.length-1..0} DO
    IF highestSell > prices[i] THEN
    profit <- MAX(profit, highestSell - prices[i])
  ELSE
    highestSell <- prices[i]
  
  RETURN profit
```

### Complexity Analysis

**Time Complexity**

$$O(n)$$

The array `price` is traversed once, `O(n)`,along with a constant number of comparisons, assignments and computations, `O(k), k < n`. `O(n+k) is O(n)`.

**Space Complexity**

$$O(n)$$

The algorithm has an input size of `n` so in `O(n)`. A few variables are created that use a constant amount of auxiliary space `O(k), k < n`. `O(n+k) is O(n)`.

### JavaScript Implementation

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let highestSell = prices[-1];
  let profit = 0;
  
  for(let i = prices.length - 1; i >= 0; i--) {
    if (highestSell > prices[i]) {
      profit = Math.max(profit, highestSell - prices[i]);
    } else {
      highestSell = prices[i];
    }
  }
  
  return profit;
};
```