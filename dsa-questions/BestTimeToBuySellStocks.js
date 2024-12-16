// Question 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

/* Brut Force Solution */
// const maxProfit = (stockPrices) => {
//   let globalProfit = 0;

//   for (let i = 0; i < stockPrices.length - 1; i++) {
//     for (let j = i + 1; j < stockPrices.length; j++) {
//       const currentProfit = stockPrices[j] - stockPrices[i];

//       if (currentProfit > globalProfit) {
//         globalProfit = currentProfit;
//       }
//     }
//   }

//   return globalProfit;
// };
/* Brut Force Solution */

/* Solve using Greedy Algorithm */
const maxProfit = (stockPrices) => {
  let minStockPurchasePrice = stockPrices[0] || 0;
  let profit = 0;

  for (let i = 1; i < stockPrices.length; i++) {
    if (stockPrices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = stockPrices[i];
    }

    profit = Math.max(profit, stockPrices[i] - minStockPurchasePrice);
  }

  return profit;
};
/* Solve using Greedy Algorithm */

console.time("maxProfit");
console.log("Case 1 >>>", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("Case 2 >>>", maxProfit([7, 6, 4, 3, 1]));
console.timeEnd("maxProfit");
