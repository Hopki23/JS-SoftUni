function solve(array, start, end) {
    let startingIndex = 0;
    let endIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == start) {
            startingIndex = i;
        }

        if (array[i] == end) {
            endIndex = i;
        }
    }

    let newArray = array.slice(startingIndex, endIndex + 1);
    return newArray;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

console.log(solve(['Eho', 'Eho'], 'Eho', 'Da'));