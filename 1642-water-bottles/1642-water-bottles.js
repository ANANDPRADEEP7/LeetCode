/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
      let sum = numBottles;
    if (numExchange === 1) return Infinity
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1)) 
    
};