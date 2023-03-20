import getFullBudgetObject from '../9-getFullBudget';

test('getFullBudgetObject', () => {
  const mock = getFullBudgetObject(20);

  expect(mock.getIncomeInDollars(mock.income)).toBe('$20');
  expect(mock.getIncomeInEuros(mock.income)).toBe('20 euros');

  const income = 150;
  const mock2 = getFullBudgetObject(income);

  expect(mock2.getIncomeInDollars(mock2.income)).toBe(`$${income}`);
  expect(mock2.getIncomeInEuros(mock2.income)).toBe(`${income} euros`);
});
