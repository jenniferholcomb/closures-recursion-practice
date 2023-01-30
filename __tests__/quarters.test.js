const quarters = require("../src/js/quarters");

  test('returns number of quarters', () => {
    expect(quarters(1)).toEqual(4)
  });