import React from 'react';
import {shallow} from 'enzyme';
import {mapResponseToProps, SongListContainer} from "./SongListContainer";

describe('SongListContainer', ()=>{
   describe('#render', ()=> {
       test('configure child component correctly', () => {
           const wrapper = shallow(<SongListContainer isLoading={true} songList={[]}/>);

           expect(wrapper.prop('isLoading')).toBe(wrapper.instance().props.isLoading);
           expect(wrapper.prop('songs')).toBe(wrapper.instance().props.songList);
       });
   });

   describe('#mapResponseToProps', () => {
       test('data.loading and data.songs are returned', () => {
            const result = mapResponseToProps({data: {loading: true, songs: []}});
            expect(result).toMatchObject({isLoading: true, songList: []});
       });
   });
});
