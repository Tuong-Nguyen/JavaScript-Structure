/**
 * Created by nttao on 7/18/2017.
 */
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import {MemberList} from '../components/MemberList';
import {mount, shallow} from 'enzyme';

function setup(){
  var users = [];
  return shallow(<MemberList users = {users}/>);
}

describe('test with enzyme', ()=>{
  it('div render', ()=>{
    
  });
});
