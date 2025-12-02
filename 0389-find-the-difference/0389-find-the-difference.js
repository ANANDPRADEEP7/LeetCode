/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let str1=s.split("").sort()
    console.log(str1)
    let str2=t.split("").sort()
    console.log(str2)
    for(let i=0;i<str2.length;i++){
        if(str1[i]!==str2[i]){
            return str2[i]
        }
    }
};