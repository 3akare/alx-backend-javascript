import concatArrays from '../5-spread-operator';

test('concatArrays', () => {
  const mock = [1, 2, 3, 3, 'h', 'e', 'l', 'l', 'o'];
  expect(concatArrays([1], [2, 3, 3], 'hello')).toEqual(mock);
});
