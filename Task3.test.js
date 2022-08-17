const capitalize = require('./Task3');

test('The first letter is Capital ', () => {
  expect(capitalize('Problems')).toBe('P');
});

test('The first letter is Capital ', () => {
  expect(capitalize('Github')).toBe('G');
});
