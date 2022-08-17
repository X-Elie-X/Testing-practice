const capitalize = require('./Task4');

test('The first letter is Capital ', () => {
  expect(capitalize('Problems')).toBe('P');
});

test('The first letter is Capital ', () => {
  expect(capitalize('Github')).toBe('G');
});
