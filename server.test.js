const test = require('node:test');
const assert = require('node:assert/strict');
const { app } = require('./server');

const request = async (path) => {
  const server = app.listen(0);
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  try {
    const response = await fetch(`${base}${path}`);
    return { response, status: response.status, body: await response.json().catch(() => null) };
  } finally {
    server.close();
  }
};

test('health endpoint returns ok', async () => {
  const { status, body } = await request('/api/health');
  assert.equal(status, 200);
  assert.equal(body.status, 'ok');
});

test('vehicles endpoint returns a list', async () => {
  const { status, body } = await request('/api/vehicles');
  assert.equal(status, 200);
  assert.ok(Array.isArray(body));
  assert.ok(body.length > 0);
  assert.ok(body[0].name);
});
