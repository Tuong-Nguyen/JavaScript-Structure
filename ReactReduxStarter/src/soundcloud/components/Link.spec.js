import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';
import { Link as RouterLink } from 'react-router-dom';

import Link, { styleSheet } from './Link';

describe('Link', () => {
  let shallow, classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  test('render React Router Link with root and custom class', () => {
    const wrapper = shallow(<Link className="test-class"/>);
    expect(wrapper.is(RouterLink)).toBe(true);
    expect(wrapper.hasClass(classes.root)).toBe(true);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });
});