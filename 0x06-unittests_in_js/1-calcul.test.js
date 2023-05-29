const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 2.3, 4.6), 7);
    assert.strictEqual(calculateNumber('SUM', 5.8, 3.1), 9);
    assert.strictEqual(calculateNumber('SUM', 7.2, 9.9), 17);
  });

  it('should return the subtraction of two rounded numbers when type is "SUBTRACT"', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 4.6), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 3.1), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 9.9), 3);
  });

  it('should return the division of two rounded numbers when type is "DIVIDE"', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.3, 4.6), 0.4);
    assert.strictEqual(calculateNumber('DIVIDE', 5.8, 2.9), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 7.2, 1.2), 7);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5.8, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 7.2, 0), 'Error');
  });

  it('should return "Error" for unknown operation types', () => {
    assert.strictEqual(calculateNumber('UNKNOWN', 2.3, 4.6), 'Error');
    assert.strictEqual(calculateNumber('UNKNOWN', 5.8, 3.1), 'Error');
    assert.strictEqual(calculateNumber('UNKNOWN', 7.2, 9.9), 'Error');
  });
});
