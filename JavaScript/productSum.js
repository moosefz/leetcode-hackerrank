// O(n + m)
var subtractProductAndSum = function(n) {    
    let sum = 0;
    let product = 1;
    let arr =  [];
    
    // fill arr
    while(n > 0) {
        arr.unshift(n % 10);
        n = Math.floor(n / 10);
    }
    
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    }
    
    return product-sum;
};

// O(n)
const subtractProdSum = n => {
    let subStr = n.toString();
    let arr = subStr.split("") // O(n)

    let sum = 0;
    let product = 1;

    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        product *= Number(arr[i]);
    }

    return product-sum;
}

// console.log(subtractProductAndSum(234));
console.log(subtractProdSum(234));