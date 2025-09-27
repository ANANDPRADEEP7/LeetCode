/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a=prices[0]
    let max=0
    for(let i=1;i<prices.length;i++){
         if(a>prices[i]){
            a=prices[i]
         }
         max=Math.max(max,prices[i]-a)
    }
    return max
};