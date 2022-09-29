function solve(array){
  let arr = [array];
  let result = array.sort((a, b => a - b).slice(0, 2))
 
  console.log(arr);
  //console.log(result.join(' '));
}
solve([1,5,10,22]);