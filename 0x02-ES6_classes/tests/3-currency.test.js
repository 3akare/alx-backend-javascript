import Currency from '../3-currency';

test('Currency init', () => {
  const mock = new Currency('$', 'Dollars');
  expect(mock.name).toBe('Dollars');
  expect(mock.code).toBe('$');

  const mock2 = new Currency('N', 'Naira');
  expect(mock2.name).toBe('Naira');
  expect(mock2.code).toBe('N');
});

test('Currency throw error test', () => {
  expect(() => new Currency(1, 'Pounds')).toThrow(TypeError('Code must be a string'));
  expect(() => new Currency('£', 1)).toThrow(TypeError('Name must be a string'));
});

test('Currency set and get test', () => {
  const mock = new Currency('$', 'Dollars');
  mock.code = '£';
  mock.name = 'Pounds';
  expect(mock._code).toBe('£');
  expect(mock._name).toBe('Pounds');
});

test('Currency displayFullCurrency test', () => {
  const mock = new Currency('¢', 'Cents');
  expect(mock.displayFullCurrency()).toBe('Cents (¢)');
});
