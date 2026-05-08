/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let arr=[]
  for(let i=0;i<=n;i++){
    let num=i
    let count=0
    while(num>0){
        count+=num%2
        num=Math.floor(num/2)
    }
    arr.push(count)
  }
  return arr
};