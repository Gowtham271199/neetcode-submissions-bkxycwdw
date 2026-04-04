class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        let set = new Set(arr)
        let count=0

        for(let num of arr){
            if(set.has(num+1)){
                count++
            }
        }
        return count
    }
}
