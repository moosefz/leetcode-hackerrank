/*

Given an array of size n, find the majority element. The majority element is the element that appears 
more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

*/

// O(n + m)
const majorityElement = nums => {
    let elements = {};

    for(let i = 0; i < nums.length; i++) {
        if(!elements[nums[i]]) {
            elements[nums[i]] = 1;
        } else {
            elements[nums[i]]++;
        }

        if(elements[nums[i]] > Math.floor(nums.length/2)) {
            return nums[i];
        }
    }

    // let base = Math.floor(nums.length / 2);

    // for(let n in elements) {
    //     if(elements[n] > base) {
    //         return n;
    //     }
    // }

}

//O(n)
function majorityElementN(nums) {
    let elements = {};

    for(let n of nums) {
        elements[n] = elements[n] + 1 || 1;

        if(elements[n] >= Math.floor(nums.length/2)) {
            return n;
        }
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,2,1,1,1,2,2]))