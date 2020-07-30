/*

Given an array of integers arr, write a function that returns true if and only 
if the number of occurrences of each value in the array is unique.

*/

function uniqueOccurences(arr) {

    let map = {};

    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }

    let mySet = new Set();

    for(let num in map) {
        if(mySet.has(map[num])) {
            return false;
        } else {
            mySet.add(map[num]);
        }
    }

    return true;
}