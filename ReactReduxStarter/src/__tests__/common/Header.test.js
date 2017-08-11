import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/common/Header';
import {IndexLink, Link} from 'react-router';
import LoadingDots from '../../components/common/LoadingDots';

//https://github.com/airbnb/enzyme/blob/master/test/ShallowWrapper-spec.jsx
describe('Header of Page', () => {
  test('Should loading with UI test', () => {
    //arrange
    const headerPage = shallow(<Header loading/>);
    //assert
    expect(headerPage.contains(<IndexLink to="/" activeClassName="active">Home</IndexLink>)).toBe(true);
    expect(headerPage.contains(<Link to="/courses" activeClassName="active">Courses</Link>)).toBe(true);
    expect(headerPage.contains(<Link to="/practices" activeClassName="active">Practices</Link>)).toBe(true);
    expect(headerPage.find(LoadingDots)).toHaveLength(1);
    expect(headerPage.children().length).toBe(6);
  });
});
