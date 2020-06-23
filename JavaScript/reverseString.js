const string = "Hi My name is Moose";

// Reverses the string to another array using ES6+ syntax - O(n)
const reverseString = arr => {
    const rev = [];
    for(let i = arr.length-1; i >= 0; i--) {
        rev.push(arr[i]); // add to end of new array
    }
    return rev.join('');
}

// Reverses the string to the console using normal syntax - O(n)
function reverseString2(arr) {

    // error checking, not an array, < 2, not a string
    // if(!arr || arr.length < 2 || typeof arr !== 'string') {
    //     return "Error: Not a valid input"
    // }

    var revStr = "";
    for(let i = arr.length-1; i = 0; i--) {
        revStr += arr[i];
    }
    console.log(revStr);
}


// quicker way - strictly JS
function reverseString3(str) {
    return str.split('').reverse().join('');
}


// one liner using ES6+
const reverse4 = str => str.split('').reverse().join('');

// universal O(1) space complexity solution - in-place
function reverseString4(s) {
    let start = 0;
    let end = s.length-1;

    for(let i = 0; i < s.length/2; i++) {
        let tmp = s[end];

        //swap
        s[end] = s[start];
        s[start] = tmp;

        start++;
        end--;
    }

    return s;
}