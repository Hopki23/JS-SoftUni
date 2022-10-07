function solve(array) {
    let number = 1;
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            newArr.push(number);
        } else {
            newArr.pop(number);
        }

        number++;
    }

    return newArr.length > 0 ? newArr.forEach(x => console.log(x)) : console.log('Empty');
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);