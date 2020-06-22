// Determine if an array contains duplicate values - return bool

var containsDuplicate = nums => {
    nums.sort((a,b) => a-b); // sort the array

    for(let i = 0; i < nums.length; i++) {

        // single item, no duplicate
        if(nums.length === 1) {
            return false;
        }

        if(nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
}



var containsDuplicate2 = nums => {
    const mySet = new Set(nums); // all sets in JS cannot have duplicates

    // therefore, if the size is the same, then there were no duplicates
    if(mySet.size === nums.length) {
        return false;
    }

    // if it was different, there were duplicates
    return true;
}

// using JS objects
var containsDuplicate3 = nums => {
    let visitedNums = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if(visitedNums[num]) { // duplicate found
            return true;
        } else { // add to object
            visitedNums[num] = true;
        }
    }

    return false;
}

console.log(containsDuplicate([1,2,3,1]));