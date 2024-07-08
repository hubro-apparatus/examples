import { test } from 'node:test';
import assert from 'node:assert/strict';

import { config } from 'hubro/test';
import server from 'hubro/server';

test('Server', async (t) => {
  const app = await server({}, config);
  const address = await app.start();

  await t.test('Route: ./', async () => {
    const response = await fetch(address);
    
    assert.equal(response.status, 200, 'Should result in an http status 200 response');
    assert.equal(response.ok, true, 'Should result in an OK response');
    
    // Body must be consumed, if not test will not exit
    await response.text();
  });

  await t.test('Route: ./error', async () => {
    const response = await fetch(new URL('./error', address));
    
    assert.equal(response.status, 404, 'Should result in an http status 404 response');
    assert.equal(response.ok, false, 'Should result in an NON OK response');
    
    // Body must be consumed, if not test will not exit
    await response.text();
  });

  await app.stop();
});