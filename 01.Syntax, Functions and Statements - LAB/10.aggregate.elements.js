function solve(array){
 let sum = 0;
 let inverseSum = 0;
 let concat = array.join('')
 for (let index = 0; index < array.length; index++) {
    sum += array[index];
    inverseSum += 1 / array[index];
 }
 console.log(sum);
 console.log(inverseSum);
 console.log(concat)
}

solve([1, 2, 3]);