/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

*/


// using a map
const isValidMap = s => {

    let stack = [];
    let parMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let c of s) {
        if (parMap[c]) {
            stack.push(c);
        } else if (parMap[stack[stack.length - 1]] == c) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
}

console.log(isValidMap('(){}[]'))

// traditional way from DS/A class
const isValid = s => {
    let parStack = [];

    for (let i = 0; i < s.length; i++) {
        // push all open brackets
        if (s.charAt(i) === '{' || s.charAt(i) === '(' || s.charAt(i) === '[') {
            parStack.push(s.charAt(i));
        } else {
            if (s.charAt(i) === ')' || s.charAt(i) === '}' || s.charAt(i) === ']') {
                // stack is empty, unbalanced
                if (parStack.length === 0) {
                    return false;
                }

                if (s.charAt(i) === ')' && parStack[parStack.length - 1] === '(' || s.charAt(i) === '}' && parStack[parStack.length - 1] === '{' ||
                    s.charAt(i) === ']' && parStack[parStack.length - 1] === '[') {
                    parStack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return parStack.length === 0 ? true : false;
}

//console.log(isValid('()[]{}'))