function solve(array, number) {

    let newArr = [];
  for (let i = 0; i < array.length; i+= number) {
    newArr.push(array[i]);
  }

  return newArr;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2));