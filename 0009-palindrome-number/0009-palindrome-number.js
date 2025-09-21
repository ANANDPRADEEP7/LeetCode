/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let w=x.toString().split('').reverse().join('')
    return w==x?true:false
};