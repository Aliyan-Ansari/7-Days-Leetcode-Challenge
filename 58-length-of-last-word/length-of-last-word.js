/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const properValue = s.trim().split(' ');
    return properValue[properValue.length - 1].length;
};