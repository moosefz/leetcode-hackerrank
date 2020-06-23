/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

// O(1) space complexity, O(n) time complexity
const singleNumber = nums => {
    // sort values
    nums.sort((a,b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            i += 1; // go to next pair
        }

        // check prev and next element for uniqueness
        if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1]) {
            return nums[i]
        }
    }
}

console.log(singleNumber([2,2,1]));