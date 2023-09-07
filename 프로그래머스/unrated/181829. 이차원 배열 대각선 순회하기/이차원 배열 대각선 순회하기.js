function solution(board, k) {
  return board.reduce((sum, row, i) => sum + row.reduce((rowSum, value, j) => i + j <= k ? rowSum + value : rowSum, 0), 0);
}