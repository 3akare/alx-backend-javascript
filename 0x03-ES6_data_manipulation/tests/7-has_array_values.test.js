import hasValuesFromArray from '../7-has_array_values';

test('has array values', () => {
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1])).toEqual(true);
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10])).toEqual(false);
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10])).toEqual(false);
});
