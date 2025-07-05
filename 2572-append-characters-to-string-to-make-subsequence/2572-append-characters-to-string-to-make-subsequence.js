/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let tIndex = 0
    for (let sIndex = 0; sIndex < s.length; sIndex++) {
        if (t[tIndex] == s[sIndex]) {
            tIndex++;
        }

        if (tIndex == t.length) {
            break;
        }
    }
    return t.length - tIndex;
};