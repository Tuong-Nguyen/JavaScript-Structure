import React from 'react';
import {shallow} from 'enzyme';
import {mapGraphqlMutationToProps, mapDataToProps, SongListContainer} from "./SongListContainer";

describe('SongListContainer', ()=>{
   describe('#render', ()=> {
       test('configure child component correctly', () => {
           const wrapper = shallow(<SongListContainer isLoading={true} songList={[]}/>);

           expect(wrapper.prop('isLoading')).toBe(wrapper.instance().props.isLoading);
           expect(wrapper.prop('songs')).toBe(wrapper.instance().props.songList);
       });
   });

   describe('#mapDataToProps', () => {
       test('data.loading and data.songs are returned', () => {
            const result = mapDataToProps({data: {loading: true, songs: []}, ownProps: {deleteSong: {}}});
            expect(result).toMatchObject({isLoading: true, songList: [], deleteSong: {}});
       });
   });

    describe('#mapGraphqlMutationToProps', () => {
        test("map mutate's deleteSong to deleteSong", () => {
            const mockMutate = jest.fn();
            const dummyReturnValue = {};
            mockMutate.mockReturnValue(dummyReturnValue);
            const dummyId = {};
            const {deleteSong} = mapGraphqlMutationToProps({mutate: mockMutate});

            const result = deleteSong(dummyId);

            expect(mockMutate).toBeCalledWith({
                variables: {
                    id: dummyId
                }
            });
            expect(result).toBe(dummyReturnValue);
        });
    });
});
