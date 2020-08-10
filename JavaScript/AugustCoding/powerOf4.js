const isPowerOfFour = num => {
    return (Math.log(num) / Math.log(4)) % 1 === 0;
}

console.log(isPowerOfFour(5));