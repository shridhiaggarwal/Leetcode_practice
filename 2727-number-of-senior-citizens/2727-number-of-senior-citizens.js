/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        let first = details[i][11];
        let second = details[i][12];
        let age = Number(first + second);
        if (age > 60) {
            count++;
        }
    }
    return count;
};