class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        for(let i=9; i>=0;i--){
            let triple = String(i).repeat(3)
            if(num.includes(triple)){
                return triple
            }
        }
        return""
    }
}
