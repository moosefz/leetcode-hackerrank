/*

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with 
any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it 
loops endlessly in a cycle which does not include 1. Those numbers for which this 
process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

*/

// O(n * m)
const isHappy = n => {

    let numQueue = [];
    let rollingSum = 0;
    let numLog = new Set();

    while (n !== 0) {


        numQueue.push(n % 10)
        n = Math.floor(n / 10)

        // run calculations and update n
        if (n === 0) {

            while (numQueue.length > 0) {
                rollingSum += Math.pow(numQueue.pop(), 2)
            }

            // happy number
            if (rollingSum === 1) {
                return true;
            } else {

                // num has been seen, looping infinitely
                if (numLog.has(rollingSum)) {
                    return false;
                } else {
                    // add to log
                    numLog.add(rollingSum)
                }

                // update n and repeat
                n = rollingSum;
                rollingSum = 0;
            }
        }
    }
}

console.log(isHappy(19))