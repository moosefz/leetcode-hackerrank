// universal application - O(n) time/space
const removeChar = (str, c) => {

    let strNew = str.split("");

    for(let i = 0; i < strNew.length; i++) {
        if(strNew[i] === c) {
            strNew.splice(i, 1);
            i--;
        }
    }

    str = strNew.join("");

    return str;
}

// js application - O(n) time, O(1) space
const removeCharJS = (str, repl) => {
    return str.split(repl).join("");
}

console.log(removeCharJS("a man a plan a canal", "l"));