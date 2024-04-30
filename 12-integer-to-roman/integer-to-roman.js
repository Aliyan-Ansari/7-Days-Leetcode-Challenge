/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanValues = {1: 'I', 2: 'II', 3: 'III', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    const numValues = [];
    const numAsString = num.toString().split('');
    numAsString.forEach((value, index) => {
        const zerosToAdd = numAsString.length - index;
        if (zerosToAdd === 1 && parseInt(value) < 9) {
            console.log('Value', typeof parseInt(value))
            const rem = parseInt(value) - 5;
            if (rem > 0) {
                numValues.push('5');
                numValues.push(rem.toString());
            } else {
                parseInt(value) > 0 && numValues.push(value);
            }
        } else {
            numValues.push(value.padEnd(zerosToAdd, '0'));
        }
    });
    console.log('Num Values: ', numValues);
    const updatedRomanValues = numValues.map((value) => {
        if (romanValues.hasOwnProperty(value)) {
            return romanValues[value];
        } else {
            if (value == 400 || value == 900) {
                return value == 400 ? 'CD' : 'CM';
            }
            if (value == 40 || value == '90') {
                return value == 40 ? 'XL' : 'XC';
            }
            if (value == '4' || value == '9') {
                return value == 4 ? 'IV' : 'IX';
            }
            if (parseInt(value) < 100 && value % 10 === 0) {
                const tens = parseInt(value) / 10;
                if (tens === 1) return 'X';
                if (tens === 2) return 'XX';
                if (tens === 3) return 'XXX';
                if (tens === 4) return 'XL';
                if (tens === 5) return 'L';
                if (tens === 6) return 'LX';
                if (tens === 7) return 'LXX';
                if (tens === 8) return 'LXXX';
                if (tens === 9) return 'XC';
            }
            if (parseInt(value) < 1000 && value % 100 === 0) {
                const hundreds = parseInt(value) / 100;
                if (hundreds === 1) return 'C';
                if (hundreds === 2) return 'CC';
                if (hundreds === 3) return 'CCC';
                if (hundreds === 4) return 'CD';
                if (hundreds === 5) return 'D';
                if (hundreds === 6) return 'DC';
                if (hundreds === 7) return 'DCC';
                if (hundreds === 8) return 'DCCC';
                if (hundreds === 9) return 'CM';
            }
            if (parseInt(value) < 4000 && value % 1000 === 0) {
                const thousands = parseInt(value) / 1000;
                if (thousands === 1) return 'M';
                if (thousands === 2) return 'MM';
                if (thousands === 3) return 'MMM';
            }
        }
    });
    console.log("Updated Roman Values: ", updatedRomanValues)
    return updatedRomanValues.join('');

};