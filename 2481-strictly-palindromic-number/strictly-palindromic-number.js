/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let base = 2; base <= n -2; base++) {
        baseValue = n.toString(base);
        if (!(baseValue === baseValue.split('').reverse().join(''))) {
            return false
        }
    }
    return true;
};