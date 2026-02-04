/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
    if (nums[0] > nums[1]) return false;

    let counter = 0;
    let isInc = true;

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        const prev = nums[i - 1];
        const currInc = curr > prev;

        if (curr === prev) return false;

        // change in direction
        if (currInc + isInc === 1) {
            isInc = !isInc;
            counter++;
        }
    }

    return counter === 2;
};
