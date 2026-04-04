class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let encoded = ''
      for(let s of strs){
        encoded +=s.length+ '#'+ s
      }
      return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
      const result= []
      let i =0

      while(i<s.length){
       let j=i
      
      while(s[j]!=='#'){
        j++
      }
 const length = parseInt(s.substring(i,j))

const str = s.substring(j+1,j+1+length)
result.push(str)
i = j+1+length
    }
return result
}
}