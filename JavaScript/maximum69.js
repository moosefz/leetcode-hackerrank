function maximum69(num) {

    // convert to array
    let numStr = num.toString().split("");
    let maxNum = Number.MIN_VALUE;

    // loop through string array and check each replacement against max
    for(let i = 0; i < numStr.length; i++) {
        if(numStr[i] === "6") {
            numStr[i] = "9";
        }

        console.log(numStr);

        maxNum = Math.max(maxNum, parseInt(numStr.join("")));
        numStr = num.toString().split(""); // reset
    }

    return maxNum;
}


console.log(maximum69(9669));