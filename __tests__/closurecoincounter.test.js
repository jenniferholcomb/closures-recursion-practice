import { coinCount } from '../src/js/closurecoincounter.js';

test('returns number of quarters', () => {
  const amount = 4.25;
  const quarter = 0.25;
  expect(coinCount(quarter)(amount)).toEqual(17);
});

test('returns number of dimes', () => {
  const amount = 0.50;
  const dime = 0.10;
  expect(coinCount(dime)(amount)).toEqual(5);
});

test('returns number of nickels', () => {
  const amount = 0.50;
  const nickel = 0.05;
  expect(coinCount(nickel)(amount)).toEqual(10);
});

test('returns number of pennies', () => {
  const amount = 4.25;
  const penny = 0.01;
  expect(coinCount(penny)(amount)).toEqual(425);
});