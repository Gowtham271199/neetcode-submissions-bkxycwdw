class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        let count = {}

        for(let num of nums){
            count[num]=(count[num]||0)+1
        }
        let uniquenums =Object.keys(count).filter(key=>count[key]==1).map(Number)
         if(uniquenums.length==0) return -1
        return Math.max(...uniquenums)
    }
}
