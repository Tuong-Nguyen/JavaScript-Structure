import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };
  return shallow(<CourseForm {...props} />);
}

describe('Test render using Enzyme', () => {
  it('render form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Course');
  });

  it('render form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('render form and h1', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');

  });
});
