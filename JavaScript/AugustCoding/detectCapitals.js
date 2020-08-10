/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way. 


*/
const detectCapitalUse = word => {
    let capitalCount = 0;
    let lowerCount = 0;
    let firstCap = false;

    // determine if first letter is capital
    if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        firstCap = true;
        capitalCount++;
    } else {
        lowerCount++;
    }

    for(let i = 1; i < word.length; i++) {
        if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            capitalCount++;
        } else {
            lowerCount++;
        }
    }

    // all letters are capitals
    if(capitalCount === word.length) {
        return true;
    // all letters are lowercase
    } else if(lowerCount === word.length) {
        return true;
    // only first letter is a capital
    } else if(firstCap && lowerCount === word.length - 1) {
        return true;
    } else {
        return false;
    }

}

console.log(detectCapitalUse("ffffffffffffF"));