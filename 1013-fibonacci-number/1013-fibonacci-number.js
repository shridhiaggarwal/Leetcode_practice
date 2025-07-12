/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    //base case
    if (n == 0 || n == 1) {
        return n; //first return
    }
    //recursive case
    return fib(n - 1) + fib(n - 2); //second return
};