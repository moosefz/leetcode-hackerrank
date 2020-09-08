/*

Given a sorted array nums, remove the duplicates in-place such that each element appear 
only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array 
in-place with O(1) extra memory.

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified 
to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

*/

const removeDuplicates = nums => {

    let current = nums[0]
    let currentPtr = 1;

    for (let i = 1; i < nums.length; i++) {
        if (current !== nums[i]) {
            // swap and update seen value
            current = nums[i]
            let tmp = nums[currentPtr];
            nums[currentPtr++] = nums[i]
            nums[i] = tmp;
        }
    }

    return nums;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))