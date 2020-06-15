// Move all zeros in an array to the end (or right side)

function moveZeroes2(nums) {
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1); // remove 0
            nums.push(0); // add to end
        }
    }
    return nums;
}



function moveZeroes(nums) {
    
    var count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[count++] = nums[i]
        }
    }

    while(count < nums.length) {
        nums[count++] = 0;
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes2([0,1,0,3,12]));