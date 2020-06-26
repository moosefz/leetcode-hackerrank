/*  Given a binary tree, return the level order traversal of its nodes' values
e.g. from left to right, level by level.

For example:
Given binary tree [3,9,20,null,null,15,7],

Should return: [[3], [9,20], [15,7]]

*/

const levelOrder = root => {
    const res = [];

    function helper(node, depth) {
        // base case
        if(!node) return;

        // if level doesn't exist in array, create it
        if(!res[depth]) {
            res[depth] = [];
        }

        // push the values to the appropriate level
        res[depth].push(node.val);

        // recurse through tree increasing depth
        helper(node.left, depth + 1);
        helper(node.right, depth + 1);
    }

    // start at index 0 for the array
    helper(root, 0);
    return res;

}