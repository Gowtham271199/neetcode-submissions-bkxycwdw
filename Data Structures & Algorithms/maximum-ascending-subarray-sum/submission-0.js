class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxsum=nums[0]
        let currentsum=nums[0]
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i-1]){
                currentsum+=nums[i]
            }
            else {
                currentsum=nums[i]
            }
            maxsum=Math.max(currentsum,maxsum)
        }

return maxsum
    }
}
