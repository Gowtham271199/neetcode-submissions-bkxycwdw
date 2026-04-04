class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        let map = new Map()

        for(let str of strings){
            let key = ""
            for(let i=1;i<str.length;i++){
            let diff= (str.charCodeAt(i)-str.charCodeAt(i-1)+26)%26
            key+=diff+","
            }
            if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(str)
        
        }
        return Array.from(map.values())
        
    }
}
