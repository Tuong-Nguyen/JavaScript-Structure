import {SongList} from "./SongList";
import {mount} from "enzyme";
import React from "react";

describe('SongList', () => {
   test('#handleClick', () => {
       const mockDeleteSong = jest.fn();
       const dummySongs = [
           {id: '1', title: 'Song1'}
       ];
       const wrapper = mount(<SongList songs={dummySongs} deleteSong={mockDeleteSong} isLoading={false}/>);
       wrapper.find('li i').simulate('click');

       expect(mockDeleteSong).toBeCalledWith("1");
   });
});