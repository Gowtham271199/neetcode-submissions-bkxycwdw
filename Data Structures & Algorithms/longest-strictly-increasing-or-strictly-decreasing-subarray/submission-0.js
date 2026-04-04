class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        if(nums.length===0) return 0

        let inc = 1
        let dec = 1
        let maxcount =1
        for(let i=1;i<nums.length;i++){
            if(nums[i]>nums[i-1]){
                inc+=1
                dec=1
            }
             else if(nums[i]<nums[i-1]){
                dec+=1
                inc=1
            }
            else{
                inc =1
                dec = 1
            }
             maxcount=  Math.max(maxcount,inc,dec)

        }
        return maxcount

    }
}
