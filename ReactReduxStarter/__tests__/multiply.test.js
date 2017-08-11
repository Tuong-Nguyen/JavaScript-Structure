jest.mock('../src/jestTest/sum');
jest.mock('../src/jestTest/calculate');
import { sum } from '../src/jestTest/sum';
import { multiply } from "../src/jestTest/multiply";
import calculate from '../src/jestTest/calculate';

beforeEach(() => {
  sum.mockReset();
  calculate.mockReset();
});

describe('Test function multiply', () => {
  test('Test call sum when execute function multiply', () => {
    //arrange
    let a = 5, b = 2;
    //act
    multiply(a, b);

    //assert
    expect(sum).toBeCalledWith(a, a);
  });

  test('Test mock return value which more times call', () => {
    //arrange
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(4)
      .mockReturnValueOnce(10);//return this value when call in second

    expect(4).toBe(mockFn());
    expect(10).toBe(mockFn());
    expect(sum.mock.calls.length).toBe(0);
  });

  test('Test mock which mockImplementation function', () => {
    //arrange
    sum.mockImplementation((x, y) => 10);//when call function sum -> return 10

    //act
    let resultValue = multiply(5, 5);

    //assert
    expect(resultValue).toEqual(50);
  });

  test('Test multi call mockImplementationOnce', () => {
    //arrange

    //If you call sum (mock) in first time -> return 10
    // call sum (mock) in second time -> return 20
    sum.mockImplementationOnce((x, y) => 10)
      .mockImplementationOnce((x, y) => 20);

    //act
    let resultValue = multiply(5, 2);

    //assert
    expect(resultValue).toBe(30);
  });

  test('Test: How to use spyOn(object, methodName)', () => {
    //arrange
    const spy = jest.spyOn(calculate, 'subtract');

    //act
    let returnValue = calculate.subtract(5, 2);

    //assert
    expect(spy).toHaveBeenCalled();
    expect(3).toBe(3);

  });

});
