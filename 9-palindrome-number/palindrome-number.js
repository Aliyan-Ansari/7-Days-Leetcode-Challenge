/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const data = x.toString();
    for (let i = 0; i < data.length / 2; i++) {

        if (i === ((data.length - 1) - i)) {
            return true;
        }
        if (data.charAt(i) !== data.charAt((data.length - 1) - i)) {
            return false;
        }
    }
        return true;
};