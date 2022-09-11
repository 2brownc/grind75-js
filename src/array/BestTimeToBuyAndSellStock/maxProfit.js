function maxProfit(prices) {
  let highestSell = prices[-1];
  let profit = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    if (highestSell > prices[i]) {
      profit = Math.max(profit, highestSell - prices[i]);
    } else {
      highestSell = prices[i];
    }
  }

  return profit;
};

export { maxProfit };