// index.test.js
import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';  // Mengimpor fungsi sum dari index.js

test('sum() should return the correct sum of two numbers', (t) => {
  // Test case 1: Penjumlahan positif
  assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) harus 3');

  // Test case 2: Penjumlahan angka negatif
  assert.strictEqual(sum(-1, 2), 1, 'sum(-1, 2) harus 1');

  // Test case 3: Penjumlahan dua angka negatif
  assert.strictEqual(sum(-1, -2), -3, 'sum(-1, -2) harus -3');

  // Test case 4: Penjumlahan dengan nol
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) harus 0');
});
