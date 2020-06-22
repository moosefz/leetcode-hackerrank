// Given a sorted array and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

// NOTE: You may assume no duplicates in the array.

const searchInsert = (nums, target) => { // O(n)

    for(let i = 0; i < nums.length; i++) {
        // since sorted, if first element is greater, end here (insert at beginning)
        if(nums[i] > target) {
            return 0;
        // element found, return index (linear search)
        } else if(nums[i] === target) {
            return i;
        // element is nested at this index
        } else if(nums[i] < target && nums[i+1] > target) {
            return i+1;
        }
    }
    // greater than all elements, place at end
    return nums.length;
}

function fib(n) {
    let answer = [0,1];

    for(let i = 2; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }

    return answer.pop();
}

console.log(fib(8));