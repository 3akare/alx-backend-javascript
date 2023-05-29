const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is "SUM"', () => {
    expect(calculateNumber('SUM', 2.3, 4.6)).to.equal(7);
    expect(calculateNumber('SUM', 5.8, 3.1)).to.equal(9);
    expect(calculateNumber('SUM', 7.2, 9.9)).to.equal(17);
  });

  it('should return the subtraction of two rounded numbers when type is "SUBTRACT"', () => {
    expect(calculateNumber('SUBTRACT', 2.3, 4.6)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 5.8, 3.1)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 7.2, 9.9)).to.equal(-3);
  });

  it('should return the division of two rounded numbers when type is "DIVIDE"', () => {
    expect(calculateNumber('DIVIDE', 2.3, 4.6)).to.equal(0.4);
    expect(calculateNumber('DIVIDE', 5.8, 2.9)).to.equal(2);
    expect(calculateNumber('DIVIDE', 7.2, 1.2)).to.equal(7);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 2.3, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 5.8, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 7.2, 0)).to.equal('Error');
  });

  it('should return "Error" for unknown operation types', () => {
    expect(calculateNumber('UNKNOWN', 2.3, 4.6)).to.equal('Error');
    expect(calculateNumber('UNKNOWN', 5.8, 3.1)).to.equal('Error');
    expect(calculateNumber('UNKNOWN', 7.2, 9.9)).to.equal('Error');
  });
});
