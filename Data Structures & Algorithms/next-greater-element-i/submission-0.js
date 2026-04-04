class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let stack =[];
        let map = {}
    for(let num of nums2){
        while(stack.length && num>stack[stack.length-1]){
        let smaller = stack.pop()
        map[smaller] = num
        }
        stack.push(num)
    }
        while(stack.length){
            let num = stack.pop()
            map[num] = -1
        }

        return nums1.map(num=>map[num])
    }

}
