import expect from 'expect';
import { sum } from './sum';

describe('Test sum demo', () =>
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  })
);
