import Pricing from '../4-pricing';
import Currency from '../3-currency';

// Remember to write init, set, get, error tests, displayFullPrice
test('Pricing static method test', () => {
  const mock = new Pricing(100, new Currency('$', 'Dollars'));
  expect(Pricing.convertPrice(mock.amount, 0.8)).toEqual(80);
});
