function parseSentence(words: string[]) {
    let sentence = "";
    for(var i = 1; i < words.length; i++) {
        sentence = sentence + words[i] + " ";
    }
}

module.exports = { parseSentence: parseSentence };
