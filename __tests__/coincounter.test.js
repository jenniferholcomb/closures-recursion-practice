import { coinCount } from '../src/js/coincounter.js';
// import quarters from '../src/js/quarters.js';
let quarters;
let dimes;
let nickels;
let pennies;

  beforeEach(() => {
    quarters = 0;
    dimes = 0;
    nickels = 0;
    pennies = 0;
  });

  test('returns number of quarters', () => {
    const amount = 4.25;
    expect(coinCount(amount, quarters, dimes, nickels, pennies)).toEqual("quarters: 17, dimes: 0, nickels: 0, pennies: 0");
  });

  test('returns number of dimes', () => {
    const amount = 4.35;
    expect(coinCount(amount, quarters, dimes, nickels, pennies)).toEqual("quarters: 17, dimes: 1, nickels: 0, pennies: 0");
  });

  test('returns number of nickels', () => {
    const amount = 4.40;
    expect(coinCount(amount, quarters, dimes, nickels, pennies)).toEqual("quarters: 17, dimes: 1, nickels: 1, pennies: 0");
  });

  test('returns number of pennies', () => {
    const amount = 4.44;
    expect(coinCount(amount, quarters, dimes, nickels, pennies)).toEqual("quarters: 17, dimes: 1, nickels: 1, pennies: 4");
  });

