class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
      let target =nums.length-k

      function partition(left,right){
        let pivot = nums[right]
        let i=left 
        for(let j=left;j<right ;j++){
          if(nums[j]<=pivot){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
          }
       
      }
       [nums[i],nums[right]]=[nums[right],nums[i]]
        return i
        }
      function quickselect(left,right){
        if(left===right) return nums[left]

        let pivotindex=partition(left,right)
      if(pivotindex===target) return nums[pivotindex]
        if(pivotindex<target) return quickselect(pivotindex+1,right)
        return quickselect(left,pivotindex-1)

      }
      return quickselect(0,nums.length-1)
    }
}
