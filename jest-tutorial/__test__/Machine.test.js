jest.mock('../src/Addition');
import Addition from '../src/Addition';
import Machine from "../src/Machine";

beforeEach(() => {
    Addition.mockReset();
});

describe('add', () => {
    test('call Addition add', () => {
        const machine = new Machine();

        const addSpy = jest.spyOn(Addition.mock.instances[0], "add");
        const result = machine.add(1, 2);

        expect(Addition.mock.instances.length).toBe(1);
        expect(addSpy).toBeCalledWith(1, 2);
    });
});
