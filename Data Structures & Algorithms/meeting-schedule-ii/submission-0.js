/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
      if(intervals.length===0)return 0
      let start = intervals.map(i=>i.start).sort((a,b)=>a-b)
      let end = intervals.map(i=>i.end).sort((a,b)=>a-b)

      let room =0
      let endptr = 0

      for(let i=0 ;i<start.length;i++){
        if(start[i]<end[endptr]){
          room++
        }
        else {
          endptr++
        }
      }
      return room
    }
    
}
