/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
*/

//O(n) TC
const balancedStringSplit = str => {
    let count = 0;
    let lCount = 0;
    let rCount = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "R") {
            rCount++;
        } else {
            lCount++;
        }

        if(rCount === lCount) {
            count++;
            rCount = 0;
            lCount = 0;
        }
    }

    return count;
}


console.log(balancedStringSplit("RLRRLLRLRL"));