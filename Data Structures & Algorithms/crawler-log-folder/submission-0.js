class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let depth = 0

        for(let log of logs){
            if(log==='../'){
                if(depth>0) depth --
            }
            else if(log==='./'){
                continue
            }
            else {
                depth++
            }
     
        }
        return depth
    }
}
