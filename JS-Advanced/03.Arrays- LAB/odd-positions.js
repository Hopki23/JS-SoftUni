function solve(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
     if (i % 2 != 0) {
        newArray.unshift(array[i] * 2);
     }
  }

  return newArray;
}


console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));