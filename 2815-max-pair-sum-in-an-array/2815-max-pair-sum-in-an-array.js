/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let result=[]
    let a=nums.map(data=>Math.max(...data.toString().split("")))
    for (let i = 0; i < a.length-1; i++) {
        for(let j=i+1; j<a.length; j++){
             if (a[i] == a[j]) {
            result.push(nums[i] + nums[j]);
        }
        }
    }
    return result.length==0 ? -1 : Math.max(...result)
};