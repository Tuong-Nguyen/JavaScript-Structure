/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectInput from '../../components/common/SelectInput';
import { authorsFormattedForDropdown } from '../../selectors/selectors';


storiesOf('SelectInput', module)
  .add('Empty authors', () => (
    <SelectInput name="authorId"
                 label="Author"
                 value="1"
                 defaultOption="Select Author"
                 options={[]}
                 onChange=""
                 error=""/>
  ))
.add('Some authors', () => {
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
    },
    {
      id: 'dan-wahlin',
      firstName: 'Dan',
      lastName: 'Wahlin'
    }
  ];

  const formattedAuthors = authorsFormattedForDropdown(authors);

  return(
  <SelectInput name="authorId"
               label="Author"
               value="1"
               defaultOption="Select Author"
               options={formattedAuthors}
               onChange=""
               error=""/>);
});
