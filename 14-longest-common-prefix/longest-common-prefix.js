/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const varToCheck = strs.reduce((a, b) => a.length < b.length ? a : b);
    let longestString = "";
    for (let i = varToCheck.length; i > 0 ; i--) {
        const data = varToCheck.slice(0, i);
        const matches = strs.every(str => str.startsWith(data));
        if (matches) {
            longestString = data;
            break;
        }

    }
    return longestString;
};