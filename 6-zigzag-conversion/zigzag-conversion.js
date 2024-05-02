/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arrayData = [];
    let resultString = '';
    let goingDown = false;
    let currentRow = 0;

    if (numRows === 1) return s;

    for (let i = 0; i < numRows; i++) {
        arrayData.push([]);
    }

    for (let i = 0; i < s.length; i++) {
        arrayData[currentRow].push(s[i]);

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;

    }

    arrayData.forEach(subArray => {
        resultString += subArray.join('');
    });

    return resultString;
};