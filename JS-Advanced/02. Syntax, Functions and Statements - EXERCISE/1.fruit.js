function calc(fruit, grams, price) {
    let weight = Number(grams / 1000);
    let totalPrice = Number(weight * price);

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

calc('orange', 1563, 2.35);