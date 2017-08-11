import React from 'react';
import {shallow} from 'enzyme';
import AboutPage from '../../components/about/AboutPage';

describe('About page', () => {
  test('Test UI of about page', () => {
    //arrange
    const about = shallow(<AboutPage/>);

    //assert
    expect(about.find('h1').text()).toBe('About');
    expect(about.find('p').text()).toBe('This application uses React, Redux, React Router and a variety of other helpful libraries.');
  });
});
