class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
      let seen = new Set()

      while(n!==1){
        if(seen.has(n))return false
        seen.add(n)

          n=n.toString().split('').reduce((sum,digit)=>sum+digit*digit,0)
      }
      return true
    }
}
