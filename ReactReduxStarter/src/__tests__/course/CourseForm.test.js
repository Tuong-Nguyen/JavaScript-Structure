import React from 'react';
import CourseForm from '../../components/course/CourseForm';
import {shallow} from 'enzyme';

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

describe('Course form', () => {
  test('render form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Course');
  });

  test('render form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  test('render form and h1', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});

