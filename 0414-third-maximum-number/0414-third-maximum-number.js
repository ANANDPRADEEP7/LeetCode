/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let dis=[...new Set(nums)]
    nums=dis.sort((a,b)=>b-a)
    console.log(nums)
    if(nums.length>=3){
        return dis[2]
    }else{
        return dis[0]
    }
    
};