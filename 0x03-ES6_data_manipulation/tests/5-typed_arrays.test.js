import createInt8TypedArray from '../5-typed_arrays';

test('createInt*TypedArray', () => {
  const mock = createInt8TypedArray(10, 2, 89);
  expect(typeof mock === 'object').toBe(true);
  expect(mock.buffer.byteLength.valueOf()).toEqual(10);
});
