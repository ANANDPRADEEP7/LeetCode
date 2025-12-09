/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  let a=num.split('')
  for(let i=0;i<num.length;i++){
    if(a[a.length-1]==0)a.pop()
  }
  return a.join("")
};