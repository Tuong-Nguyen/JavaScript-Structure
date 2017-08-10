import * as React from "react";
import {SongFormContainer} from "./SongFormContainer";
import {shallow} from "enzyme";

describe('SongFormContainer', () => {
   test('#saveSong call addSong', () => {
       const mockMutation = jest.fn();
       const wrapper = shallow(<SongFormContainer addSong={mockMutation}/>);
       const component = wrapper.instance();

       component.saveSong("hello");

       expect(mockMutation).toBeCalledWith({variables: {title: "hello"}});
   });
});