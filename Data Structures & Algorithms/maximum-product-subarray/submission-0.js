class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minprod = nums[0]
        let maxprod = nums[0]
        let result = nums[0]

        for(let i=1;i<nums.length;i++){
            let curr = nums[i]

            if(curr<0){
                [maxprod,minprod]=[minprod,maxprod]
            }
            maxprod = Math.max(curr,curr*maxprod)
            minprod = Math.min(curr,curr*minprod)

            result = Math.max(result , maxprod)
        }
        return result
    }
}
