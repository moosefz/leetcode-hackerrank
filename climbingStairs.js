// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.

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
