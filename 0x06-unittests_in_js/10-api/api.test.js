const request = require('request');
const { expect } = require('chai');

const serverUrl = 'http://localhost:7865'; // Update with the actual server URL

describe('API integration tests', () => {
  describe('GET /available_payments', () => {
    it('returns available payment methods', (done) => {
      request.get(`${serverUrl}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type']).to.include('application/json');
        const responseBody = JSON.parse(body);
        expect(responseBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns welcome message with the username', (done) => {
      const userName = 'JohnDoe';

      request.post(
        {
          url: `${serverUrl}/login`,
          json: { userName },
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(`Welcome ${userName}`);
          done();
        }
      );
    });
  });
});
