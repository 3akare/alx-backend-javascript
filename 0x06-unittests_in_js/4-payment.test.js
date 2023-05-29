const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log method
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber and log the total', () => {
    // Create a stub for Utils.calculateNumber to control its behavior
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call the function
    sendPaymentRequestToApi(5, 3);

    // Verify the expected behavior
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 5, 3);

    // Restore the stubbed method
    calculateNumberStub.restore();
  });
});
