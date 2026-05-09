/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=x.toString().split('').reverse().join('')
    return a==x?true:false
};