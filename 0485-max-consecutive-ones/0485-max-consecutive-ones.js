/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0
    let maxLen = 0
    for(let right = 0; right < nums.length; right++){
        if(nums[right] == 0){
            left = right + 1
        }
        const len = right - left + 1
        maxLen = Math.max(len, maxLen)
    }
    return maxLen
    
};