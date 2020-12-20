function countLetters (string) {
    var obj = {};

    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] === undefined) {
            //console.log(obj[string[i]]);
            obj[string[i]] = 1;
            //console.log(string[i] + obj[string[i]]);

        } else if (obj[string[i]]) {
            //console.log(obj[string[i]]);
            obj[string[i]] += 1;
        }
    }
    return obj;
}
console.log(countLetters("aaaaabbbccdefgaaaaa"));