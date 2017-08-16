import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';
import { AppBar, Toolbar } from 'material-ui';

import Link from './Link';
import Nav, { styleSheet } from './Nav';

describe('Nav', () => {
  let shallow;
  let classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('render', () => {
    test('is a AppBar with static position', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.find(AppBar)).toHaveLength(1);
      expect(wrapper.find(AppBar).props().position).toBe('static');
    });

    test('has a Toolbar', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.find(Toolbar)).toHaveLength(1);
    });

    test('has a Link display "SoundCloud"', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.find(Link)).toHaveLength(1);
      expect(wrapper.find(Link).props().children).toBe('SoundCloud');
    });
  });
});