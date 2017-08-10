import React from "react";
import {SongFormContainer, mapGraphqlMutateToProps} from "./SongFormContainer";
import {shallow} from "enzyme";

jest.mock('react-router');
import {hashHistory} from 'react-router';

import {fetchSongs} from '../queries/fetchSongs';

beforeEach(()=>{
   jest.resetModules('react-router');
});

describe('SongFormContainer', () => {
    const successivePromise = new Promise((resolver) => resolver());
    const mockMutation = jest.fn();
    mockMutation.mockReturnValue(successivePromise);
    
    describe('component', () => {
        test('#saveSong call props.addSong', () => {
            const wrapper = shallow(<SongFormContainer addSong={mockMutation}/>);
            const component = wrapper.instance();

            component.saveSong("hello");

            expect(mockMutation).toBeCalledWith("hello");
        });

        test('#saveSong redirect to "/" when addSong succeeds', () => {
            const spy = jest.spyOn(hashHistory, 'push');

            const wrapper = shallow(<SongFormContainer addSong={mockMutation}/>);
            const component = wrapper.instance();

            // act
            component.saveSong("hello");

            // assertion
            expect(spy).toHaveBeenCalledWith('/');
        });
    });


    describe('global', () => {
        test("#mapGraphqlMutateToProps map mutate's addSong to addSong", () => {
            // act
            const {addSong} = mapGraphqlMutateToProps({mutate: mockMutation});
            const result = addSong('Hello');

            // assertion
            expect(mockMutation).toBeCalledWith({
                variables: {
                    title: 'Hello'
                },
                refetchQueries: [{query: fetchSongs}]
            });
            expect(result).toBe(successivePromise);
        });
    });
});