class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = nums.reduce((a,b)=>a+b,0)
        let leftsum = 0

        for(let i=0;i<nums.length;i++){
            let rightsum = total-leftsum-nums[i]
            if(leftsum===rightsum){
                return i
            }
            leftsum+=nums[i]
        }
        return -1
    }
}
