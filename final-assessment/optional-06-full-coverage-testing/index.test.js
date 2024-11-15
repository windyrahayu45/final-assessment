// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function should add two positive numbers correctly', () => {
  assert.strictEqual(sum(1, 2), 3, 'Sum of 1 and 2 should be 3');
  assert.strictEqual(sum(100, 200), 300, 'Sum of 100 and 200 should be 300');
  assert.strictEqual(sum(10, 5), 15, 'Sum of 10 and 5 should be 15');
});

test('sum function should return 0 if one of the numbers is negative', () => {
  assert.strictEqual(sum(-1, 2), 0, 'Sum of -1 and 2 should return 0');
  assert.strictEqual(sum(1, -2), 0, 'Sum of 1 and -2 should return 0');
  assert.strictEqual(sum(-5, -5), 0, 'Sum of -5 and -5 should return 0');
});

test('sum function should return 0 if any argument is not a number', () => {
  assert.strictEqual(sum('1', 2), 0, 'Sum of "1" and 2 should return 0');
  assert.strictEqual(sum(1, '2'), 0, 'Sum of 1 and "2" should return 0');
  assert.strictEqual(sum('a', 'b'), 0, 'Sum of "a" and "b" should return 0');
  assert.strictEqual(sum(undefined, 2), 0, 'Sum of undefined and 2 should return 0');
  assert.strictEqual(sum(1, null), 0, 'Sum of 1 and null should return 0');
});

test('sum function should return 0 if both arguments are not numbers', () => {
  assert.strictEqual(sum('a', 'b'), 0, 'Sum of "a" and "b" should return 0');
  assert.strictEqual(sum(undefined, null), 0, 'Sum of undefined and null should return 0');
  assert.strictEqual(sum({}, []), 0, 'Sum of an object and an array should return 0');
});

test('sum function should return the sum of two zero values', () => {
  assert.strictEqual(sum(0, 0), 0, 'Sum of 0 and 0 should be 0');
});

test('sum function should handle large numbers', () => {
  assert.strictEqual(sum(999999999, 1000000000), 1999999999, 'Sum of large numbers should be correct');
});
