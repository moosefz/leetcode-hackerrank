/*

Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element. 

*/

function kthSmallest(matrix, k) {

    let flat = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            flat.push(matrix[i][j]);
        }
    }

    flat.sort((a,b) => a-b);
    
    return flat[k - 1];
}


console.log(kthSmallest([[1,5,9], [10,11,13], [12,13,15]], 8));