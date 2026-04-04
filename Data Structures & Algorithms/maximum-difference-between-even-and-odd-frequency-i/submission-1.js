class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let freq = {}

        for(let ch of s){
            freq[ch] = (freq[ch]||0)+1
        
        }
        let maxodd = -Infinity
        let mineven = Infinity


        for(let ch in freq){
            if(freq[ch]%2===1){
                maxodd = Math.max(maxodd,freq[ch])
                
            }
            else{
                mineven = Math.min(mineven,freq[ch])
            }
        }
        return maxodd-mineven

    }
}
