/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length == 0) {
        return true;
    }
    if (s.length > t.length) {
        return false;
    }

    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] !== t[j]) {
            j++;
        } else {
            i++;
            j++;
        }
    }
    if ((i == s.length) || (i == s.length && j == t.length)) {
        return true;
    }
    return false;
};