/*

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?


*/

// O(n) and O(1)
function findDuplicates(nums) {

    let duplicates = [];

    nums.sort((a,b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            duplicates.push(nums[i]);
        }
    }

    return duplicates;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));

// O(n) and O(n)
function findDuplicates2(nums) {
    let map = {};
    let duplicates = [];

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    for(let n in map) {
        if(map[n] > 1) {
            duplicates.push(parseInt(n));
        }
    }

    return duplicates;
}

console.log(findDuplicates2([4,3,2,7,8,2,3,1]));