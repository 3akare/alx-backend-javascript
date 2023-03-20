import getSumofHoods from '../3-default-parameter';

test('default-paramter', () => {
  expect(getSumofHoods(34)).toBe(142);
  expect(getSumofHoods(34, 3)).toBe(56);
  expect(getSumofHoods(34, 3, 4)).toBe(41);
});
