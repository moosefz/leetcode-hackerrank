/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

function robGood(nums) {
    // empty
    if(nums === null || nums.length === 0) {
        return 0;
    }

    // return the only value
    if(nums.length === 1) {
        return nums[0];
    }

    // return the max of the two values
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    // larger cases, dynamic programming
    let dp = [];

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]); // the max of house 1 or 2

    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }

    return dp[nums.length-1]; // the maximum value in the array

}

console.log(robGood([114,117,207,117,235,82,90,67,143]));