class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left =0
        let maxcount = 0
        let maxlength=0
        let freq = new Array(26).fill(0)

        for(let right=0;right<s.length;right++){
            let index =s.charCodeAt(right)-65
            freq[index]++

            maxcount = Math.max(maxcount,freq[index])

            while((right-left+1)-maxcount>k){
                freq[s.charCodeAt(left)-65]--
                left++
            }
            maxlength = Math.max(maxlength,right-left+1)
        }
return maxlength
        

    }
}
