/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
        const m = mat.length;
    const n = mat[0].length;

    // Function to collect elements of a diagonal and sort them
    const sortDiagonal = (row, col) => {
        const diagonal = [];
        // Collect elements of the diagonal
        while (row < m && col < n) {
            diagonal.push(mat[row][col]);
            row++;
            col++;
        }
        // Sort the diagonal elements
        diagonal.sort((a, b) => a - b);
        // Place sorted elements back on the diagonal
        while (row > 0 && col > 0) {
            row--;
            col--;
            mat[row][col] = diagonal.pop();
        }
    };

    // Traverse upper-right part of the matrix (excluding main diagonal)
    for (let i = 0; i < m; i++) {
        sortDiagonal(i, 0);
    }
    for (let j = 1; j < n; j++) {
        sortDiagonal(0, j);
    }

    return mat;
};