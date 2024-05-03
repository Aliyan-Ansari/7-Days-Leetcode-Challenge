/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let result = 0;
    const data = bank.map((value) => value.split('').reduce((a, b) => +a + +b))
    const filteredData = data.filter((value) => value != 0);
    for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i + 1]) {
            result += filteredData[i] * filteredData[i + 1];
        }
    }
    return result;
};