// reverse an integer

function reverseInt(x) {

    let reverse = parseFloat(
        x.toString().split('').reverse().join('')) * Math.sign(x);

    return reverse;
}

console.log(reverseInt(-321));