/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        let result = []
        function btt(node){
            if(!node) return
            btt(node.left)
            result.push(node.val)
            btt(node.right)
        }
    btt(root)
    return result
    }
}
