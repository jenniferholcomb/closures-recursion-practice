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
    } else if (Math.round(amount * 100) / 100 >= .25) {
        amount -= .25;
        quarters++;
        return coinCount(amount, quarters, dimes, nickels, pennies);
    } else if (Math.round(amount * 100) / 100 >= .10) {
        amount -= .10;
        dimes++;
        return coinCount(amount, quarters, dimes, nickels, pennies);
    } else if (Math.round(amount * 100) / 100 >= .05) {
        amount -= .05;
        nickels++;
        return coinCount(amount, quarters, dimes, nickels, pennies);
    } else {
        return `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${Math.round(amount * 100)}`;
    }
}

// examples below posted by Patrick

//not strictly following any functinal concepts
function CoinCount(dollars){
  const coins = {
    "quarters":.25,
    "dimes":.10,
    "nickles":.05,
    "pennies":.01
  }
  let change = {}
  Object.keys(coins).forEach(coin => {
    const count = Math.floor(dollars / coins[coin])
    dollars = dollars - (coins[coin]*count)
    Object.assign(change, {
      [coin]: count
    })
  })
  return change
}

//recursive, immutable
function CoinCountRecursive(dollars, out={}, i=0){
  if(dollars <= 0) return out
  const coinVals = [.25, .10, .05, .01]
  const coinTypes = ["quarters", "dimes", "nickles", "pennies"]
  if(dollars >= coinVals[i]){
    const count = Math.floor(dollars / coinVals[i])
    const newDollars = (dollars - (coinVals[i] * count)).toFixed(2)
    const newOut = Object.assign({}, out, {[coinTypes[i]] : count})
    return CoinCountRecursive(newDollars, newOut, i+1)
  } else {
    return CoinCountRecursive(dollars, out, i+1)
  }
}

//closures, unary
function CoinCountClosure(dollars){
  return () => {
    const quarters = Math.floor(dollars / .25)
    const minusQs = (dollars - (.25 * quarters)).toFixed(2)
    return () => {
      const dimes = Math.floor(minusQs / .10)
      const minusDs = (minusQs - (.10 * dimes)).toFixed(2)
      return () => {
        const nickles = Math.floor(minusDs / .05)
        const minusNs = (minusDs - (.05 * nickles)).toFixed(2)
        return () => {
          const pennies = Math.floor(minusNs / .01)
          return `out of ${dollars}, there are ${quarters} quarters, ${dimes} dimes, ${nickles}, nickles, and ${pennies} pennies`
        }
      }
    }
  }
}

// using performance which is a built in tool for measuring runtimes in javascript
//below I log the return of the functions and how many milliseconds (ish) each function took to execute
var s1 = performance.now();
console.log(CoinCountClosure(4.99)()()()())
var e1 = performance.now();
const time1 = Math.abs((s1-e1)*100).toFixed(2)
console.log(`closure time is ${time1} ms`)
var s2 = performance.now();
console.log(CoinCount(4.99))
var e2 = performance.now();
const time2 = Math.abs((s2-e2)*100).toFixed(2)
console.log(`non recursive time is ${time2} ms`)
var s3 = performance.now();
console.log(CoinCountRecursive(4.99))
var e3 = performance.now();
const time3 = Math.abs((s3-e3) * 100).toFixed(2)
console.log(`recursive time is ${time3} ms`)