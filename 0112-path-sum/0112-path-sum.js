/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    const allNodeSumSet = new Set();

    function pathSum(node, sum = 0) {
        if (!node) return;

        sum += node.val;

        // If this is a leaf, store the sum
        if (!node.left && !node.right) {
            allNodeSumSet.add(sum);
            return;
        }

        if (node.left) pathSum(node.left, sum);
        if (node.right) pathSum(node.right, sum);
    }

    pathSum(root);

    return allNodeSumSet.has(targetSum);
};