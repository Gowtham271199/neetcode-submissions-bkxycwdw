class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let count ={}
        
        for(let str of arr){
            count[str]=(count[str]||0)+1
        }

        let distinctcount=0

        for(let str of arr){
            if(count[str]===1){
                distinctcount++
            }
            if(distinctcount===k){
                return str
            }
        }
        return ""
    }
}
