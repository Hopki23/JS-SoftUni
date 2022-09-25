function solve(inputOne, inputTwo, inputThree){
    let firstNum = Number(inputOne);
    let secondNum = Number(inputTwo);
    let thirdNum = Number(inputThree);

    let largestNum = Math.max(firstNum, secondNum, thirdNum);
    console.log(`The largest number is ${largestNum}.`);
}

solve(5, -3, 16)