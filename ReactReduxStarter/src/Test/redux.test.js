/**
 * Created by nttao on 7/18/2017.
 */
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import {MemberList} from '../components/MemberList';
import {mount, shallow} from 'enzyme';
function setUp() {
  let renderer = TestUtils.createRenderer();
  renderer.render(<MemberList users={[]} />);
  let outPut = renderer.getRenderOutput();
  return outPut;
}
describe('memberlist form via react test', () =>{
  it('div render', ()=>{
    let output = setUp();
    expect(output.type).toBe('div');
  });
});
