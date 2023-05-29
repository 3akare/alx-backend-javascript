const calculateNumber = require('./0-calcul');
const assert = require('assert')

describe('calculateNumber', () => {
  it('should return the sum of two rounded up numbers', () => {
    assert.strictEqual(calculateNumber(2.3, 4.6), 7);
    assert.strictEqual(calculateNumber(5.8, 3.1), 9);
    assert.strictEqual(calculateNumber(7.2, 9.9), 17);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-2.7, 5.3), 2);
    assert.strictEqual(calculateNumber(-4.5, -2.1), -6);
  });

  it('should handle zero values correctly', () => {
    assert.strictEqual(calculateNumber(0, 7.9), 8);
    assert.strictEqual(calculateNumber(-2.4, 0), -2);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round up decimal numbers correctly', () => {
    assert.strictEqual(calculateNumber(3.1, 4.9), 8);
    assert.strictEqual(calculateNumber(2.5, 1.2), 4);
    assert.strictEqual(calculateNumber(9.6, 1.1), 11);
  });
});
