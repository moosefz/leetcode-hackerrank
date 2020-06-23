// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

const sumOfTwoInt = (a,b) => {

    while(b) {
        let carry = a & b; // bitwise and
        a = a ^ b; // bitwise XOR
        b = carry << 1; // bit shift left 1 bit
    }
    return a;
}

console.log(sumOfTwoInt(4, 5));