class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map()

        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                let previousindex = map.get(nums[i])
                if(i-previousindex<=k){
                    return true
                }
            }
            map.set(nums[i],i)
        }
        return false
    }
    
}
