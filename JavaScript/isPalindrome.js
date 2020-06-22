const isPalindrome = s => {

    // sanitize input string - lowercase and regex \W character class
    s = s.toLowerCase().replace(/[\W]/g, "");
    
    let start = 0;
    let end = s.length-1;

    for(let i = 0; i < s.length; i++) {
        if(s[start] !== s[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));