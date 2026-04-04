class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxright =-1
        for(let i=arr.length-1;i>=0;i--){
            let current = arr[i]
            arr[i]=maxright
            maxright=Math.max(maxright,current)
        }
        return arr
    }
}
