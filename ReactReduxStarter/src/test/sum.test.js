/**
 * Created by nkim on 8/7/2017.
 */
import {sum} from './sum';
import expect from 'expect';

test('add 1 + 2  to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
