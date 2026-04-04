class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let n= nums.length
        let result = new Array(n)


        let left =0
        let right=n-1
        let pos = n-1

        while(left<=right){
            let leftsquare = nums[left]*nums[left]
          let rightsquare = nums[right]*nums[right]
        
        if(leftsquare>rightsquare){
            result[pos]=leftsquare
            left++
        }
        else{
            result[pos]=rightsquare
            right--
        }
        pos--
        }
        return result

    }
}
