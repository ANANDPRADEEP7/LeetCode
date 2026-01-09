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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let fun = function (l,r){
        if(l==null && r==null) return true;  
        if(l==null || r==null) return false; 
        if(l.val != r.val) return false;
        let a,b;
            a=fun(l.left,r.right);
            b=fun(l.right,r.left);

        return a && b;
    }

    return fun(root.left,root.right);
};