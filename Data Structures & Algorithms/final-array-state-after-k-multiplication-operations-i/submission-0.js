class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        for (let i=0;i<k;i++){

            let minindex = 0

            for(let j=1;j<nums.length;j++){
                if(nums[j]<nums[minindex]){
                    minindex = j
                }
            
            }
             nums[minindex]*= multiplier
        }
        return nums
    }
}
