// shuffle array and pair all values with value at n indices

function shuffle(nums, n) {

    let shuffle = [];

    for (let i = 0; i < n; i++) {
        shuffle.push(nums[i]);
        shuffle.push(nums[i + n]);
    }

    return shuffle;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// Sub test, shuffling an array
const shuffleArr = arr => {

    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length)
        let tmp = arr[rand]
        arr[rand] = arr[i]
        arr[i] = tmp;
    }

    return arr;
}

console.log(shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))