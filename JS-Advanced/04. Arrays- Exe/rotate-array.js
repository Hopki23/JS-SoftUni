function solve(array, number) {

    for (let i = 0; i < number; i++) {      
       let currentElement = array[array.length - 1];
       array.pop();
       array.unshift(currentElement);
    }

    console.log(array.join(' '));
}

solve(['1',
    '2',
    '3',
    '4'],
    2);