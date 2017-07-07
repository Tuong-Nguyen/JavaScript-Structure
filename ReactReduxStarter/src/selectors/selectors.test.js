/**
 * Created by lnthao on 7/7/2017.
 */
import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', () => {
  it('should return author data formatted for use in a dropdown', ()=>{
    const authors = [
      {
        id: 'cory-house',
          firstName: 'Cory',
        lastName: 'House'
      },
      {
        id: 'scott-allen',
          firstName: 'Scott',
        lastName: 'Allen'
      }
    ];
    const expected = [
      {
        value: 'cory-house',
        text: 'Cory House'
      },
      {
        value: 'scott-allen',
        text: 'Scott Allen'
      }
    ];

    expect(authorsFormattedForDropdown(authors)).toEqual(expected);
  });
});
