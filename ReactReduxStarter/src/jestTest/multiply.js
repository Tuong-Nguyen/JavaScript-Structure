import { sum } from './sum';

export function multiply(a, b) {
  let result = 0;
  for(let i = 1; i <= b; i ++) {
    result += sum(a, a);
  }
  return result;
}
