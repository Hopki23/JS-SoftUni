function solve(input) {
    let sum = 0;
    let str = input.toString();
    let areEqual = true;

    for (let i = 0; i < str.length; i++) {
        let first = Number(str[i]);
        let second = Number(str[i + 1]);
        sum += first;
        
        if(i == str.length - 1){
          break;
        }

        if(first != second){
          areEqual = false;
        }

    }
    console.log(areEqual);
    console.log(sum);
}

solve(2222222);