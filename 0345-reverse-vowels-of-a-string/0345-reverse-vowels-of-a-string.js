/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vow = [];
    var vowin = [];
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var str = s.split('');
    for(var i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            vow.push(s[i]);
            vowin.push(i);
        }
    }

    vow.reverse();

    for(var i = 0; i < vowin.length; i++){
        str[vowin[i]] = vow[i];
    }

    return str.join('');
};