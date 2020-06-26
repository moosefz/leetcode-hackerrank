const invertBinaryTree = root => {
    // helper method to traverse tree and swap
    function helper(node) {
        // base case - null/bottom reached
        if(!node) return; 
        
        // swap nodes
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;

        // recurse until null reached
        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return root;
}