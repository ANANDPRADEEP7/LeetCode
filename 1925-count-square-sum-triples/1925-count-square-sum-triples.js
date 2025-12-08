/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let co=0
    for(let a=1;a<=n;a++){
        for(let b=a+1;b<=n;b++){
            let c=Math.sqrt(a * a + b * b)
            if(c>n){
                break
            }
               if (Number.isInteger(c)) {
                co += 2;
            }
        }
    }
    return co
};