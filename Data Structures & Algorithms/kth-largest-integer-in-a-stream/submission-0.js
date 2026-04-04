class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.k = k
      this.nums = nums.slice()
      this.nums.sort((a,b)=>b-a)
      if(this.nums.length>k){
        this.nums = this.nums.slice(0,k)

      }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.nums.push(val)
      this.nums.sort((a,b)=>b-a)
      if(this.nums.length>this.k){
        this.nums.pop()
      }
      return this.nums[this.k-1]
    }
}
