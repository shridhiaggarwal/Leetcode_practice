/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let sarr = s.trim().split(' ');
    let last = sarr[sarr.length -1]
    return last.length;
};