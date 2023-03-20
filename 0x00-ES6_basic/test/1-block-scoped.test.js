import taskBlock from '../1-block-scoped';

test('block-scoped', () => {
  const mock = [false, true];
  expect(taskBlock(true)).toEqual(mock);
  expect(taskBlock(false)).toEqual(mock);
});
