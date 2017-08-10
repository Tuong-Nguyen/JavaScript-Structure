import * as React from "react";
import {SongFormContainer, mapGraphqlMutateToProps} from "./SongFormContainer";
import {shallow} from "enzyme";

describe('SongFormContainer', () => {
    describe('component', () => {
        test('#saveSong call addSong', () => {
            const mockMutation = jest.fn();
            const wrapper = shallow(<SongFormContainer addSong={mockMutation}/>);
            const component = wrapper.instance();

            component.saveSong("hello");

            expect(mockMutation).toBeCalledWith("hello");
        });
    });


    describe('global', () => {
        test('#mapGraphqlMutateToProps map addSong to mutate addSong', () => {
            const mockMutate = jest.fn();
            mockMutate.mockReturnValue({});

            // act
            const {addSong} = mapGraphqlMutateToProps({mutate: mockMutate});
            const result = addSong('Hello');

            // assertion
            expect(mockMutate).toBeCalledWith({
                variables: {
                    title: 'Hello'
                }
            });
            expect(result).toMatchObject({});
        });
    });
});