import returnHowManyArguments from '../4-rest-parameter';

test('returnHowManyArguments', () => {
  expect(returnHowManyArguments(1, 2, 3)).toBe(3);
  expect(returnHowManyArguments(1, '2')).toBe(2);
  expect(returnHowManyArguments(1, '2', ['hello', 'there'], { args: ['3', '4'] })).toBe(4);
  expect(returnHowManyArguments()).toBe(0);
});
