/*

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

*/
function pascalTriangle(n) {

    let pTriangle = [[1], [1,1]];

    // edge cases
    if(n < 2) {
        return pTriangle[n];
    }

    // each row starts and ends with 1
    for(let i = pTriangle.length - 1; i < n; i++) {

        pTriangle.push([1]);

        // add previous value and next value and push to the new row
        for(let j = 0; j < pTriangle[i].length-1; j++) {
            pTriangle[i+1].push(pTriangle[i][j] + pTriangle[i][j+1]);
        }

        pTriangle[i+1].push(1);
    }

    // return the required row
    return pTriangle[n];
}

console.log(pascalTriangle(5));