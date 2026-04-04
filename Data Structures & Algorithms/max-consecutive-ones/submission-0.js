class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
      let maxcount=0;
      let currcount =0;

      for(let num of nums){
        if(num===1){
          currcount++
          maxcount=Math.max(maxcount,currcount)
        }
        else {
            currcount=0
        }
      }
      return maxcount
    }
}
