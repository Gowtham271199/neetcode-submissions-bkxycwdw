class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let freq={}
        let result =-1

        for(let num of arr){
            freq[num]=(freq[num]||0)+1
        }
        for(let num in freq){
            if(Number(num)===freq[num]){
                result = Math.max(result,Number(num))
            }
        }
        return result
    }
}
