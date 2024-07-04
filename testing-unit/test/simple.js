import { test } from 'node:test';
import assert from 'node:assert/strict';

import kvikk from 'kvikk';

test('Server', async (t) => {
  const server = await kvikk();
  await server.start();

  await t.test('Route: /', async () => {
    const response = await fetch('http://localhost:4000');
    
    assert.equal(response.status, 200, 'Should result in an http status 200 response');
    assert.equal(response.ok, true, 'Should result in an OK response');
    
    // Body must be consumed, if not test will not exit
    await response.text();
  });

  await t.test('Route: /error', async () => {
    const response = await fetch('http://localhost:4000/error');
    
    assert.equal(response.status, 404, 'Should result in an http status 404 response');
    assert.equal(response.ok, false, 'Should result in an NON OK response');
    
    // Body must be consumed, if not test will not exit
    await response.text();
  });

  await server.stop();
});