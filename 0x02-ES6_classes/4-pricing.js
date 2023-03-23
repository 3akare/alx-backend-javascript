import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if ((currency instanceof Currency) !== true) {
      throw TypeError('Currency must be a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Can't call static methods on an object, only on an object class
  // const p = new Pricing(100, new Currency('EUR', 'Euro'))
  // Pricing.convertPrice(p.amount, 0.8);

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
