// Rotate array values to the right (circular rotation) n times

// rotate array to the right
const rotateArray = (arr, n) => {

    var tmp = 0;
    var count = 0;

    // n being the number of rotations
    while(count < n) {
        tmp = arr.pop();
        arr.unshift(tmp);
        count++;
    }
    return arr;
}

// using splice
const rotateArray2 = (nums, k) => {
    nums.unshift(...nums.splice(nums.length-k));
}

console.log(rotateArray([1,2,3,4,5,6], 3));