function solve(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                firstSum += matrix[row][col];
            } 
        }
    }
    

    matrix.reverse();
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                secondSum += matrix[row][col];
            } 
        }
    }
    console.log(firstSum + ' ' + secondSum);
}

solve([[20, 40],
[10, 60]]);
console.log('------------');
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);