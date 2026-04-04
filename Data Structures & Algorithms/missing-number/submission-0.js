class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
    let n = nums.length
    let total = (n*(n+1))/2
    let orgtotal = nums.reduce((acc,val)=>acc+val,0)
    return total-orgtotal
}

}