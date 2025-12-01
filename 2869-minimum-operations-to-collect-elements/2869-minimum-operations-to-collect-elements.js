/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let arr=[]
    let count=0
    let a=0
    for(let i=nums.length;i>=0;i--){
        if(nums[i]<=k&&!arr.includes(nums[i])&&arr.length<=k){
            arr[a++]=nums[i]
        }
        if(arr.length===k){
            count=nums.length-i
            break
        }
    }
    return count
};