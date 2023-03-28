import setFromArray from '../6-set';

test('setFromArray', () => {
  const mock = setFromArray([12, 32, 15, 78, 98, 15]);
  expect(mock.has(12)).toEqual(true);
  expect(mock.has(32)).toEqual(true);
  expect(mock.has(15)).toEqual(true);
});
