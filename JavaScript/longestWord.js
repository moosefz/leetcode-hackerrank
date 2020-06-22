// Determine the longest word in a string

const longestWord = sen => {

    const wordSplit = sen.split(" ");
    var tmp = 0;
    var max = 0;
    var longword;

    wordSplit.forEach((word) => {
        tmp = word.length;    
        if(max < tmp) {
            max = tmp;
            longword = word;
        }
    })

    return longword;
}

console.log(longestWord("Hello there world biggest"));