function solve(input){
  let result;
    if(input == 'Monday'){
        result = 1;
    }else if(input == 'Tuesday'){
        result = 2;
    }else if(input == 'Wednesday'){
        result = 3;
    }else if(input == 'Thursday'){
        result = 4
    }else if(input == 'Friday'){
        result = 5;
    }else if(input == 'Saturday'){
        result = 6
    }else if(input == 'Sunday'){
        result = 7
    }else{
        result = 'error';
    }

    return result;
}
console.log(solve('Monday'));