/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let arr = [0, 1];
    if (n == 0) {
        return arr[0];
    }
    if (n == 1) {
        return arr[1];
    }
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        answer = arr[i - 1] + arr[i - 2];
        arr.push(answer);
    }
    return answer;
};