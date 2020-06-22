// shuffle array and pair all values with value at n indices

function shuffle(nums, n) {
    
    let shuffle = [];
    
    for(let i = 0; i < n; i++) {
        shuffle.push(nums[i]);
        shuffle.push(nums[i+n]);
    }

    return shuffle;
}

console.log(shuffle([2,5,1,3,4,7], 3));