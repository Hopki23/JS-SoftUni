function solve(first, second) {
    let x = Number(first);
    let y = Number(second);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}

solve(15, 5);