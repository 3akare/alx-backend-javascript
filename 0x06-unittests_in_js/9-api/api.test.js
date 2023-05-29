const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // New test suite for cart page
  describe('GET /cart/:id', () => {
    it('returns correct payment methods when :id is a number', (done) => {
      const cartId = 123; // Example cart ID

      request.get(`${API_URL}/cart/${cartId}`, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('returns 400 status code when :id is not a number', (done) => {
      const cartId = 'abc'; // Invalid cart ID

      request.get(`${API_URL}/cart/${cartId}`, (_err, res, body) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });
});
