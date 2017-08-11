import React from 'react';
import {mount, shallow} from "enzyme";
import {LyricCreate} from "./LyricCreate";

describe('LyricCreate', () => {
    test('call props.addLyric when submit ', () => {
        const mockAddLyric = jest.fn();
        const wrapper = mount(<LyricCreate addLyric={mockAddLyric}/>);
        wrapper.find('input').simulate('change', {target: {value: 'hello'}});

        // act
        wrapper.find('form').simulate('submit');

        // assert
        expect(mockAddLyric).toBeCalledWith('hello');
    });
});