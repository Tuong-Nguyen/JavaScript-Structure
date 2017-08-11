import React from 'react';
import {shallow} from 'enzyme';
import LoadingDots from '../../components/common/LoadingDots';

describe('Loading dot in page', () => {
  const loadingDots = shallow(<LoadingDots dots={1} interval={0}/>);
  test('Loading dots', () => {
    expect(loadingDots.find('span').length).toBe(1);
    //expect(loadingDots.find('span').text).toEqual('.');
  });
});


