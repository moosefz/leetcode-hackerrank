// Randomize array values

const numbers = [1,2,3,4,5,6,7,8,9,10];

// first attempt
const randomArray = arr => {
    let count = 0;

    while(count !== arr.length) {
        // generate random index
        let rand = Math.floor(Math.random() * (arr.length-1));

        // swap values
        let tmp = arr[rand];
        arr[rand] = arr[count];
        arr[count] = tmp;

        // increment counter index
        count++;
    }

    return arr;

}

// slightly better version
const randomArrayFor = arr => {
    for(let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (arr.length-1));
        
        let tmp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = tmp;
    }

    return arr;
}

function createRandomArray() {
    let arr = [];
    let count = 0;

    while(count !== 10) {
        arr[count] = Math.floor(Math.random() * 20);
        count++;
    }

    return arr;
}

console.log(randomArray(numbers));
console.log(randomArrayFor(numbers));
console.log(createRandomArray());



