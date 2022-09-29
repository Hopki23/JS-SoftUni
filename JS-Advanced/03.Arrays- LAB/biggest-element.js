function solve(matrix) {
    let number = Number.MIN_VALUE;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
       if (matrix[row][col] > number) {
        number = matrix[row][col];
       }
    }
  }

  return number;
}

console.log(solve([
    [-1, -2, -3],
    [-10, -5, -4]]));