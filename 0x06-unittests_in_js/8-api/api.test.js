const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

describe('Express server', () => {
  it('should return the welcome message for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Welcome to the payment system');
  });
});
