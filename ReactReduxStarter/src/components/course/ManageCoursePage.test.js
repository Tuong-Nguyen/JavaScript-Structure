import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); } },
      course : {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      }
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    expect(saveButton.props().value).toBe('Save');
  });

  it('Should saved message when trying to save course', () => {
    const props = {
      authors: [{
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
      }],
      actions: { saveCourse: () => { return Promise.resolve(); } },
      course : {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
      }
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(saveButton.props().value).toBe('Saving...');
  });
});
