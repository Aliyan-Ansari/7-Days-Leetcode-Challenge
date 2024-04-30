/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stackArray = [];
    let isValidInput = true;

    s.split('').forEach((val) => {
        if (val === '(' || val === '{' || val === '[') {
            stackArray.push(val);
        } else if (val === ')' || val === '}' || val === ']') {
            const prevBracket = stackArray.pop();

            if ((val === ')' && prevBracket !== '(') ||
                (val === '}' && prevBracket !== '{') ||
                (val === ']' && prevBracket !== '[')) {
                isValidInput = false;
            }
        }
    });
    if (stackArray.length > 0) {
        isValidInput = false;
    }

    console.log('Valid: ', isValidInput);
    return isValidInput;
};