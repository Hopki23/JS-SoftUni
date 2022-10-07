function solve(array) {
  let number = 1;
  let sorted = array.sort();

  sorted.forEach(x => {
    console.log(`${number}.${x}`);
    number++;
  });
}

solve(["John", "Bob", "Christina", "Ema"]);