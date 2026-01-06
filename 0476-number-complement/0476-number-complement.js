/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = num.toString(2)
    let complement = "";
    for(let n of binary){
        if(n === "1"){
            complement = complement + "0"
        }
        else{
            complement = complement + "1"
        }
    }
    return parseInt(complement,2)
};