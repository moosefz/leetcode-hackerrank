/*

Given an array of integers with possible duplicates, randomly output the index of a given target number. 
You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

*/

class Solution {
    constructor(nums) {
        this.map = {};
        this.arr = nums;
        this.countOccurences(nums);
    }

    //O(n)
    countOccurences(nums) {
        for(let i = 0; i < nums.length; i++) {
            if(this.map[nums[i]]) {
                this.map[nums[i]]++;
            } else {
                this.map[nums[i]] = 1;
            }
        }
    }

    //O(n)
    pick(target) {
        // single
        if(this.map[target] === 1) {
            return this.arr.indexOf(target);
        }

        // duplicates
        if(this.map[target] > 1) {
            let duplicateArr = [];

            // store index value
            for(let i = 0; i < this.arr.length; i++) {
                if(this.arr[i] === target) {
                    duplicateArr.push(i);
                }
            }

            // return random index where the duplicate value is located in original array
            return duplicateArr[Math.floor(Math.random() * duplicateArr.length)];
        }

    }
}

let solution = new Solution([1,2,3,3,3]);
console.log(solution.pick(3));