class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currsum = nums[0]
        let maxsum = nums[0]

        for (let i=1;i<nums.length;i++){
            currsum = Math.max(nums[i],currsum+nums[i])
            maxsum = Math.max(currsum,maxsum)
        }
        return maxsum
    }
}
