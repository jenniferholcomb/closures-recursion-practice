// export function quarters(amount) {
//     return amount / .25;
// }

// export function dimes(amount) {
//     return amount / .10;
// }

export const countQuarters = (amount, counter) => {
    // base case
    if (isNaN(amount || counter)) {
        return 0;
    }
    else if (amount < .25) {
        return counter; // checks to see if any more quarters 
    } else {
        amount -= .25;
        counter++;
        return countQuarters(amount, counter);
        // console.log(amount, counter);
    }
}

// console.log(countQuarters(1.24, 0));


export const coinCount = (amount, quarters, dimes, nickels, pennies) => {
    if (isNaN(amount)) {
        return;
    } else if (amount >= .25) {
        amount -= .25;
        quarters++;
        return coinCount(amount, quarters, dimes, nickels, pennies);
    } else if (amount >= .10) {
        amount -= .10;
        dimes++;
        return coinCount(amount, quarters, dimes, nickels, pennies);
    } else {
        return `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`;
    }
}
