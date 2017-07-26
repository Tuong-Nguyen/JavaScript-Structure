/**
 * Created by nttao on 7/18/2017.
 */
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import App from '../components/App';
import {mount, shallow} from 'enzyme';

describe('Connection test',()=>{
  it('kjnkadhadasd test', ()=>{
    const wrapper = mount(<App />);
    expect(wrapper.value)
  });
});
