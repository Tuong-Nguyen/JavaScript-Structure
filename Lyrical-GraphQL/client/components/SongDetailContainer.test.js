import React from 'react';
import {shallow} from "enzyme";
import {mapDataToProp, mapMutationToProp, SongDetailContainer} from "./SongDetailContainer";

describe('SongDetailContainer', () => {
    describe('global', () => {
        test('#mapDataToProp', () => {
            const dummyAddLyric = () => {
            };
            const dummySong = {};
            const dummyLoading = true;

            const result = mapDataToProp({
                data: {song: dummySong, loading: dummyLoading},
                ownProps: {addLyric: dummyAddLyric}
            });
            expect(result).toMatchObject({song: dummySong, isLoading: dummyLoading, addLyric: dummyAddLyric});
        });

        test('#mapMutationToProp', () => {
            const mockMutate = jest.fn();
            // act
            const result = mapMutationToProp({mutate: mockMutate});
            result.addLyric('1', 'Hello');
            // assert
            expect(mockMutate).toBeCalledWith({variables: {id: '1', content: 'Hello'}});
        });
    });

    describe('SongDetailContainer', () => {
        test('#handleAddLyric call props.addLyric with id and content', () => {
            const mockAddLyric = jest.fn();

            const wrapper = shallow(<SongDetailContainer addLyric={mockAddLyric} song={{id: '1', title: 'Hello', lyrics: []}}/>);
            wrapper.instance().handleAddLyric('hello');

            expect(mockAddLyric).toBeCalledWith('1', 'hello');
        });
    });
});