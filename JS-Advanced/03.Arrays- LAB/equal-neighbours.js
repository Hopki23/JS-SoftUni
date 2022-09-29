function solve(array) {
    let pairs = 0;
    let matrix = array.map(row=>row.split(' '));
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] == matrix[row - 1][col]) {
                pairs++;
            }

            if (matrix[row][col] == matrix[row][col - 1]) {
                pairs++;
            }

            if (matrix[row][col] == matrix[row][col + 1]) {
                pairs++;
            }

            if (matrix[row][col] == matrix[row + 1][col]) {
                pairs++;
            }
        }
    }

    return pairs;
}

console.log(solve([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));