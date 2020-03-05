const request = require('supertest')
const app = require('./app')

describe('Test /hello', () => {
  test('It should respond 200', (done) => {
    request(app).get('/hello').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Test /n', () => {
  test('It should respond with roman numeral I', (done) => {
    const input = 1
    request(app).get(`/${input}`).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("I")
      done();
    });
  });
});