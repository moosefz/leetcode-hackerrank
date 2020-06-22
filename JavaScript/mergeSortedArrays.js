// Merge two sorted arrays and return the array

function mergeSortedArrays(arr1, arr2) { // O(a + b)

    const mergedArr = [];

    if(arr1.length === 0) {
        return arr2;
    }

    if(arr2.length === 0) {
        return arr1;
    }

    for(let i = 0; i < arr1.length; i++) {
        mergedArr.push(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++) {
        mergedArr.push(arr2[i]);
    }

    return mergedArr.sort((a,b) => a-b);
}

// ES6 syntax
const mergeSortedArrays2 = (arr1, arr2) => {

    // check for empty arrays
    if(arr1.length === 0) {
        return arr2;
    }

    if(arr2.length === 0) {
        return arr1;
    }

    const mergedArr = [...arr1, ...arr2];
    return mergedArr.sort((a,b) => a - b);
}


console.log(mergeSortedArrays([1, 2, 3, 4], [1,2]));
console.log(mergeSortedArrays2([0, 2, 4, 8], [1,2]));

