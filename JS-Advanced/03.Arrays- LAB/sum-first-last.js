function solve(array){
  let first = Number(array[0]);
  let second = Number(array[array.length - 1]);
  let result = first + second;

  return result;
}
console.log(solve(['20', '30', '40']));