/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){

        let ans=words[i].split("").reverse().join("");
        if(ans==words[i]){
            return ans;
    }
    }
    return "" 
};