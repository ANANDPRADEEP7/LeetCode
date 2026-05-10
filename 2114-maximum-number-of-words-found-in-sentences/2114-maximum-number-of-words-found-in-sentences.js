/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     var wordCount = [];
     
    for (let i = 0; i < sentences.length; i++) {
        wordCount.push(sentences[i].split(' ').length);
    }

    return Math.max(...wordCount);
};