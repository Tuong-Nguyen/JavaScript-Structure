import React from 'react';
import {shallow} from 'enzyme';
import HomePage from '../../components/home/HomePage';

describe('Home page', () => {
  test('Test home page UI', () => {
    const home = shallow(<HomePage/>);
    expect(home.find('h1').text()).toBe('Pluralsight Administration');
    expect(home.find('p').text()).toBe('React, Redux and React Router in ES6 for ultra-responsive web apps.');
    //expect(home.find('Link').text).toBe('Learn more');
  });
});
