const twoSum = (nums, target) => {
    
    const mySet = {};

    for(let i = 0; i < nums.length; i++) {
        if(mySet[nums[i]] !== undefined) {
            return [mySet[nums[i]], i];
        }
        mySet[target-nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15], 9))