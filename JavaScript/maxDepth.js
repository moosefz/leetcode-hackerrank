// Return maximum depth of a binary tree

const maxDepth = root => {

    let maxDepth = 0;

    function dive(node, currentDepth) {
        // base case - null reached, check maxDepth and update
        // all binary trees are of height n - 1
        if(!node) {
            maxDepth = Math.max(maxDepth, currentDepth - 1);
            return;
        }

        // recurse until null reached
        dive(node.left, currentDepth + 1);
        dive(node.right, currentDepth + 1);
    }

    dive(root, 1);
    return maxDepth;
}