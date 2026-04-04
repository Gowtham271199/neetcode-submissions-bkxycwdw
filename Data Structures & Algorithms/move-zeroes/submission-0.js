class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let insertnum = 0

        for(let i=0;i<nums.length;i++){
            if(nums[i]!==0){
            nums[insertnum]=nums[i]
            insertnum++
            }
        }

        while(insertnum<nums.length){
            nums[insertnum]=0
            insertnum++
        }
        return insertnum
    }
}
