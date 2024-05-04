/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dfs = (row, col, index) => {
        if (index === word.length) return true;
        
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) {
            return false;
        }
        
        const temp = board[row][col];
        board[row][col] = '*';
        
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);
        
        board[row][col] = temp;
        
        return found;
    };
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            console.log('i: ', i, ' j: ', j);
            if (dfs(i, j, 0)) return true;
        }
    }
    
    return false;
};