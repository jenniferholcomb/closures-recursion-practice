const coinCount = (amount, quarters, dimes, nickels, pennies) => {
  if (isNaN(amount)) {
    return;
  } else if (Math.round(amount * 100) / 100 >= .25) {
    amount -= .25;
    quarters++;
    console.log(`amount: ${amount}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`);
    return coinCount(amount, quarters, dimes, nickels, pennies);
  } else if (Math.round(amount * 100) / 100 >= .10) {
    amount -= .10;
    dimes++;
    console.log(`amount: ${amount}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`);
    return coinCount(amount, quarters, dimes, nickels, pennies);
  } else if (Math.round(amount * 100) / 100 >= .05) {
    amount -= .05;
    nickels++;
    console.log(`amount: ${amount}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`);
    return coinCount(amount, quarters, dimes, nickels, pennies);
  } else {
    console.log(`quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`);
    return `amount: ${amount}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`;
  }
}

coinCount(4.35, 0, 0, 0, 0);