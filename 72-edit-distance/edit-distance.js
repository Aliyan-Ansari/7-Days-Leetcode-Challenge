/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const wordToChangeLength = word1.length;
    const actualWordLength = word2.length;

    const numberOfOperations = [];

    for (let i = 0; i <= wordToChangeLength; i++) {
        numberOfOperations[i] = [];
        numberOfOperations[i][0] = i;
    }
    for (let j = 0; j <= actualWordLength; j++) {
        numberOfOperations[0][j] = j;
    }

    for (let i = 1; i <= wordToChangeLength; i++) {
        for (let j = 1; j <= actualWordLength; j++) {
            if (word2[j - 1] === word1[i - 1]) {
                numberOfOperations[i][j] = numberOfOperations[i - 1][j - 1];
            } else {
                numberOfOperations[i][j] = Math.min(numberOfOperations[i - 1][j - 1], numberOfOperations[i - 1][j], numberOfOperations[i][j - 1]) + 1;
            }
        }
    }

    return numberOfOperations[wordToChangeLength][actualWordLength];
};