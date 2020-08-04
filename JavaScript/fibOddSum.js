/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


//O(n) T&S
function sumFibs(num) {
    // First two values of fibonacci sequence and the sum
    let fibOddSum = 2;
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
  
    for(let i = 2; i < num; i++) {
        // iterative fib
        dp[i] = dp[i-1] + dp[i-2];
        // break
        if(dp[i] > num) {
            return fibOddSum;
        // odd number - add value to sum.
        } else if(dp[i] % 2 === 1) {
            fibOddSum += dp[i];
      }
    }
    return fibOddSum;
  }