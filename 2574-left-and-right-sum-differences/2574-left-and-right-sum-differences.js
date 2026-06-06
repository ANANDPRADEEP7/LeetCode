/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum=0
    let rightSum=nums.reduce((sum,curr)=>sum+=curr,0)
       let result=[]
       for(let i=0;i<nums.length;i++){
        rightSum-=nums[i]
        result.push(Math.abs(leftSum-rightSum))
        leftSum+=nums[i]
       }
       return result
};