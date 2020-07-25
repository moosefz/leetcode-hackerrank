/* 
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many 
transactions as you like (i.e., buy one and sell one share of the stock multiple times).
*/

const buyAndSellStock2 = prices => {
    let profit = 0;

    if(prices.length === 0) {
        return profit;
    }

    for(let i = 0; i < prices.length; i++) {
        let prev = prices[i - 1];

        if(prev < prices[i]) {
            profit += prices[i] - prev;
        }
    }

    return profit;
}

