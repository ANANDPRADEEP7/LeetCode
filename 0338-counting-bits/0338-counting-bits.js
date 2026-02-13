/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
   let count = 0, result;
    let output = [];
    for (var i = 0; i <= n; i++) {
        result = i;
        while (result != 0) {
            result &= (result - 1)
            count++;
        }
        output[i] = count
        count = 0;
    }
    return output;  
};