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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
      if(!intervals || intervals.length===0) return true
      intervals.sort((a,b)=>a.start-b.end)
      for(let i=1;i<intervals.length;i++){
        if(intervals[i].start<intervals[i-1].end){
          return false
        }
      }
      return true
    }
}
