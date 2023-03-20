import getBudgetObject from '../7-getBudgetObject';

test('getBudgetObject', () => {
  const mock = { income: 12, gdp: 32, capita: 35 };
  const mock2 = getBudgetObject(12, 32, 35);
  expect(mock2.income).toEqual(mock.income);
  expect(mock2.capita).toEqual(mock.capita);
  expect(mock2.gdp).toEqual(mock.gdp);
  expect(mock).toEqual(mock2);
});
