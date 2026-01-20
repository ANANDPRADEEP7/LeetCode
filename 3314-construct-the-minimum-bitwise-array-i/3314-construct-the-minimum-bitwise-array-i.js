/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans=[]
    for(let i=0;i<nums.length;i++){
        let n=nums[i]
        ans[i]=-1

        if(n!==2){
           ans[i] = n - (((n + 1) & (-n - 1)) / 2);
        }
    }
    return ans
};