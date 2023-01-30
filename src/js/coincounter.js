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


