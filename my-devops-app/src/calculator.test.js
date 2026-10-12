import { test, expect } from 'vitest';
import { add } from './calculator';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
