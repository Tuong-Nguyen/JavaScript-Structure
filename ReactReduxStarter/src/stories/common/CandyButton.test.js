/**
 * Created by lnthao on 8/14/2017.
 */

import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import {shallow, mount} from 'enzyme';
import CandyButton from './CandyButton';
import AddAlarm from 'material-ui-icons/AddAlarm';

describe('CandyButton test', () => {
let shallow;

  beforeAll(() => {
   shallow = createShallow({dive: true});
  });

  test('CandyButton has alarm icon', () => {
    const wrapper = shallow(<CandyButton />);
    console.log(wrapper.props());
    expect(wrapper.find(AddAlarm).length).toBe(1);
  });
});
