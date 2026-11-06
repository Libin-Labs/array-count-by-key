import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts by parity', () => {
  assert.deepEqual(
    [...api.countBy([1, 2, 3, 4], (x) => x % 2)],
    [
      [1, 2],
      [0, 2],
    ],
  );
});
test('handles empty input', () => {
  assert.equal(api.countBy([], (x) => x).size, 0);
});
test('preserves first key order', () => {
  assert.deepEqual([...api.countBy(['b', 'a', 'b'], (x) => x).keys()], ['b', 'a']);
});
test('passes index to key function', () => {
  assert.equal(api.countBy(['a', 'b'], (_, i) => i).get(1), 1);
});
test('counts null key', () => {
  assert.equal(api.countBy([1, 2], () => null).get(null), 2);
});
test('rejects invalid key function', () => {
  assert.throws(() => api.countBy([1], 0), TypeError);
});
