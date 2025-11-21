/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b)
    let sumPrice=prices[0]+prices[1]
    if(sumPrice<=money){
        return money-sumPrice
    }
    return money
};