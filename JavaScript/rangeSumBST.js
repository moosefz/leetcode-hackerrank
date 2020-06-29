/* 
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
*/

const rangeSumBST = (root, L, R) => {
    let rangeSum = 0;

    function helper(node) {
        // null reached
        if(!node) {
            return;
        }
        
        // value falls within range, add to sum
        if(node.val >= L && node.val <= R) {
            rangeSum += node.val;
        }

        // recursively traverse
        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return rangeSum;
}

