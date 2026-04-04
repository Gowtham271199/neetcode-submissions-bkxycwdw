class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {}

        //count frequency
        for(let num of nums){
            freqMap[num]=(freqMap[num]|| 0)+1
        }
        // create buckets
        let buckets=Array(nums.length+1).fill().map(()=>[])
          for(let num in freqMap){
            let freq = freqMap[num]
            buckets[freq].push(Number(num))
          }
        //count the top k elements
          let results=[]

          for(let i=buckets.length-1;i>=0&&results.length<k;i--){
            for(let num of buckets[i]){
               results.push(num) 
               if(results.length===k) break
            }
          }
return results
    }
}
