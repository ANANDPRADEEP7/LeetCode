/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let res =nums.sort((a,b)=>a-b)
    let count=0;
    for(let i=0;i<nums.length;i++){
       if(res[i]===res[i+1]){
        res.shift()
        res.shift()
        i--
        count++
       } 
    }
    return [count,res.length]
};