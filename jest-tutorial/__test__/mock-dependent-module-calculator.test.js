jest.mock('../src/sum');
import sum from '../src/sum';
import {add} from '../src/calculator';

beforeEach(()=> {
   sum.mockReset();
});

describe('mock dependent module', () => {
    test('add calls sum', () => {
        // act
        add(1, 2);

        // assert
        expect(sum).toBeCalledWith(1, 2);
    });
});

describe('mock return value', () => {
    test('add 1 and 2 returns 3 - mockReturnValue', () => {
        sum.mockReturnValue(3);

        // act
        const result = add(1, 2);

        // assert
        expect(result).toBe(3);
    });

    test('add 1 and 2 returns 3 - mockImplementation', () => {
        sum.mockImplementation((a, b) => 3);

        // act
        const result = add(1, 2);

        // assert
        expect(result).toBe(3);
    });
});

describe('assert mock using mock property', () => {
   test('add 1 and 2 returns 3', () => {
       // act
       add(1, 2);

       // assert
       expect(sum.mock.calls[0][0]).toBe(1);
       expect(sum.mock.calls[0][1]).toBe(2);
   });
});
