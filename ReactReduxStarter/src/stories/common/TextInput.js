/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../../components/common/TextInput';

storiesOf('TextInput', module)
  .add('default view', () => (
    <TextInput name="category"
               label="Category"
               value="JavaScript"
               onChange=""
               error="Error"/>
  ));
