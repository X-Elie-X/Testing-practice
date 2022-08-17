const Calculator = require('./Task3');

describe('Add two numbers ', () => {
  const calculate = new Calculator();

  test('10 + 7 = 17', () => {
    expect(calculate.add(10, 7)).toBe(17);
  });

  test('20 + 6 = 26', () => {
    expect(calculate.add(20, 6)).toBe(26);
  });
});

describe('Subtract two numbers ', () => {
  const calculate = new Calculator();

  test('7 - 14 = -7', () => {
    expect(calculate.subtract(7, 14)).toBe(-7);
  });

  test('15 - 3 = 12', () => {
    expect(calculate.subtract(15, 3)).toBe(12);
  });
});

describe('Divide two numbers ', () => {
  const calculate = new Calculator();

  test('10 / 2', () => {
    expect(calculate.divide(10, 2)).toBe(5);
  });

  test('120 / 5 = 24', () => {
    expect(calculate.divide(120, 5)).toBe(24);
  });
});

describe('Multiply two numbers ', () => {
  const calculate = new Calculator();

  test('45 * 8 = 96', () => {
    expect(calculate.multiply(45, 8)).toBe(360);
  });

  test('120 * 9 = 1080', () => {
    expect(calculate.multiply(120, 9)).toBe(1080);
  });
});
