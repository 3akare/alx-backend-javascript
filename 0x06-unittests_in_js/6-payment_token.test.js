const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with success response', async () => {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: 'Successful response from the API' });
  });

  it('should return undefined for unsuccessful response', async () => {
    const result = await getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
