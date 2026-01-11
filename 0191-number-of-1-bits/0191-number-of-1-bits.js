/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
   let c=0;
    while(n > 1 ){
        let a=n%2;
        if(a==1){
            c++;
        }
        n=Math.floor(n/2);

    }
    return c+1;  
};