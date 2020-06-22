// defang IP address - replace all '.' with '[.]'

// JS methods
function defangIPaddr2(address) {
    let word = address.split(".");
    return word.join("[.]");
}

console.log(defangIPaddr("1.1.1.1"));

// O(a + b)
function defangIPaddr(address) {
    let arr = [];
    for(let i = 0; i < address.length; i++) {
        arr.push(address.charAt(i));
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '.') {
            arr[i] = "[.]";
        }
    }
    return arr.join("");
}

console.log(defangIPaddr2("1.1.1.1"));