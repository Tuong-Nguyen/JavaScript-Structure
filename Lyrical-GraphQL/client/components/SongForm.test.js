import React from 'react';
import {SongForm} from "./SongForm";
import {mount} from "enzyme";

describe('SongForm', () => {
    test('#submit will call saveSong with title', () => {
        const mockSaveSong = jest.fn();
        const wrapper = mount(<SongForm saveSong={mockSaveSong}/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'Simple'}});

        // arrange
        wrapper.find('input[type="submit"]').simulate('submit', {});

        // act
        expect(mockSaveSong).toBeCalledWith({title: 'Simple'});
    });
});