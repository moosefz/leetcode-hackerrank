// Given two strings s and t , write a function to determine if t is an anagram of s.
const isAnagram = (s, t) => {

    // length mismatch, cannot be true
    if(s.length !== t.length) {
        return false;
    }

    // all letters of alphabet
    let charCount = new Array(26).fill(0);
    
    // increment letter indices of each char  
    for(let i = 0; i < s.length; i++) {
        charCount[s[i].charCodeAt(0) - 97]++;   
        charCount[t[i].charCodeAt(0) - 97]--;   
    }

    // parse array - if not even, not anagram
    for(let i = 0; i < charCount.length; i++) {
        if(charCount[i] !== 0) {
            return false;
        }
    }

    return true;
}

//console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagaram"));