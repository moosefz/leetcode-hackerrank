// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.

// O(n) space complexity
const climbStairs = n => {
    let dp = []; // store ways to climb
    dp[0] = 1; // 0 steps
    dp[1] = 1; // 1 step

    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// follows a fibonacci sequence using dynamic programming

// O(1) space complexity
const climbStairs2 = n => {
    if(n === 1) {
        return 1;
    }

    let first = 1;
    let second = 2;

    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}

console.log(climbStairs2(5));