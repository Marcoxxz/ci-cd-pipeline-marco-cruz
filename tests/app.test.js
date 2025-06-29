const request = require('supertest');
const app = require('../src/index');

describe('Test endpoints', () => {
  test('/hello should return greeting', async () => {
    const res = await request(app).get('/hello');
    expect(res.text).toBe('Hello world!');
  });

  test('/sum with valid params', async () => {
    const res = await request(app).get('/sum?a=5&b=3');
    expect(res.text).toContain('8');
  });

  test('/sum missing params', async () => {
    const res = await request(app).get('/sum?a=5');
    expect(res.statusCode).toBe(400);
  });

  test('/status should return JSON', async () => {
    const res = await request(app).get('/status');
    expect(res.body).toHaveProperty('status', 'ok');
  });

  test('404 route', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});

test('Complete flow: sum then check status', async () => {
  const sumRes = await request(app).get('/sum?a=10&b=15');
  expect(sumRes.text).toContain('25');

  const statusRes = await request(app).get('/status');
  expect(statusRes.statusCode).toBe(200);
  expect(statusRes.body).toHaveProperty('status', 'ok');
});

test('Multiple endpoints in sequence', async () => {
  const helloRes = await request(app).get('/hello');
  expect(helloRes.statusCode).toBe(200);
  expect(helloRes.text).toBe('Hello world!');

  const sumRes = await request(app).get('/sum?a=7&b=8');
  expect(sumRes.statusCode).toBe(200);
  expect(sumRes.text).toContain('15');

  const badRes = await request(app).get('/nonexistent');
  expect(badRes.statusCode).toBe(404);
});
