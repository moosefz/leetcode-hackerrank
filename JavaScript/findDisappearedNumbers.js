const findDisappearedNums = nums => {
    // remove duplicates
    let mySet = new Set([...nums]);
    let missingNums = [];

    // if i does not exist in the set, its missing
    for(let i = 1; i <= nums.length; i++) {
        if(mySet.has(i)) {
            continue;
        } else {
            missingNums.push(i);
        }
    }

    return missingNums;

}

console.log(findDisappearedNums([1,1]));