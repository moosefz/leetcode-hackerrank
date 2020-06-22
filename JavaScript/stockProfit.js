/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/
function maxProfit2(prices) {
    let max = 0;
    let min = Number.MAX_VALUE;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
}

console.log(maxProfit2([7,1,5,3,6,4]));
