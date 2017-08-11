import React from 'react';
import {LyricList} from "./LyricList";
import {mount} from "enzyme";

describe('LyricList', () => {
    test('call props.likeLyric when click on like button', () => {
        const lyrics = [
            {id: '1', content: 'hello'},
        ];
        const mockLikeLyric = jest.fn();
        const wrapper = mount(<LyricList lyrics={lyrics} isLoading={false} likeLyric={mockLikeLyric}/>);

        wrapper.find('li i').simulate('click');
        expect(mockLikeLyric).toBeCalledWith('1');
    });
});