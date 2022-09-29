function solve(array){
 let result = [];

 for (let index = 0; index < array.length; index++) {
     if(index % 2 == 0){
       result.push(array[index]);
     }
 }

 console.log(result.join(' '));
}

solve(['20', '30', '40', '50', '60']);