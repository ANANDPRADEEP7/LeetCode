/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let result=new Set(candyType).size;
    let sum=candyType.length/2
    return Math.min(result,sum)
};