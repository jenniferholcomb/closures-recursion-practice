import { countQuarters } from '../src/js/coincounter.js';

  test('returns number of quarters', () => {
    expect(countQuarters(1, 0)).toEqual(4);
  });

