/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount 
of money you can rob tonight without alerting the police.
*/

function robGood(nums) {
    
    // no houses to rob - no money made
    if(nums === null || nums.length === 0) {
        return 0;
    }

    // 1 house to rob
    if(nums.length === 1) {
        return nums[0];
    }

    // 2 houses to rob - return the one with more money
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    // > 2 houses
    let moneyBag = [];
    moneyBag[0] = nums[0]; // first house
    moneyBag[1] = Math.max(nums[0], nums[1]); // the most profit between 1st/2nd

    for(let i = 2; i < nums.length; i++) {
        // every other house added if greater profit than previous amount
        moneyBag[i] = Math.max(nums[i] + moneyBag[i-2], moneyBag[i-1])
    }

    // return the max value
    return moneyBag[nums.length-1];
}

console.log(robGood([114,117,207,117,235,82,90,67,143]));
