function solve(input, inputTwo){
  let first = Number(input);
  let second = Number(inputTwo);
  
  let sum = 0;
  for (let index = first; index <= second; index++) {
    sum += index;
  }

  return sum;
}
console.log(solve('-8', '20'));