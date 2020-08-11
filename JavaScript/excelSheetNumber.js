// Convert excel column title into column number
const excelSheetNumber = s => {

    let colNum = 0;

    if (s === null) {
        return colNum;
    }

    // character code + the power of it's position (2, 1, 0, etc)
    for (let i = 0; i < s.length; i++) {
        colNum += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - i - 1);
    }

    return colNum;
}

// convert excel column number into column title
const excelColTitle = num => {

    let colTitle = [];

    if (num <= 0) {
        return "Invalid Input";
    }

    // extract character code from value
    while (num > 0) {
        let char = String.fromCharCode((num % 26) + 64);
        colTitle.unshift(char);
        num = Math.floor(num / 26);
    }
    return colTitle.join("");
}

console.log(excelSheetNumber("A"));
console.log(excelColTitle(1));