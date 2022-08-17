const { expect } = require('expect');
const stringL = require('./Task 1');

test('length is', () => {
  expect(stringL('cat')).toBe(3);
});

test('length is', () => {
  expect(stringL('ab')).toBe(2);
});

test('length is', () => {
  expect(stringL('terminal')).toBe(8);
});

test('length is  10 +', () => {
  expect(() => {
    stringL('microverses');
  }).toThrow();
});

test('no String', () => {
  expect(() => {
    stringL('');
  }).toThrow();
});
