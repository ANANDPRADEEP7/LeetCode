/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr=0;
    let maxnum=0;
    for(let i of gain){
        curr+=i;
        maxnum=Math.max(maxnum,curr);
    }
    return maxnum
};