/**
 * Created by lnthao on 8/14/2017.
 */

import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import {shallow, mount} from 'enzyme';
import CandyButton from './CandyButton';
import AddAlarm from 'material-ui-icons/AddAlarm';

describe('CandyButton test', () => {
  test('CandyButton has alarm icon', () => {
    const shallow = createShallow({dive: true});
    const wrapper = shallow(<CandyButton/>);
    expect(wrapper.find(AddAlarm).length).toBe(1);
  });

  test("Dive shallow - wrapper's current node name is withStyles(Button)", () => {
    const shallow = createShallow({dive: true});
    const wrapper = shallow(<CandyButton/>);
    expect(wrapper.name()).toEqual('withStyles(Button)');
  });

  test("Non-dive shallow - wrapper's current node name is CandyButton", () => {
    const shallow = createShallow({dive: false});
    const wrapper = shallow(<CandyButton/>);
    expect(wrapper.name()).toEqual('CandyButton');
  });
});
