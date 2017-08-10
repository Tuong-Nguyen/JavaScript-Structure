/**
 * Created by nttao on 8/9/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ResponesiveUiComponent from './../MaterialUiComponents/ResponesiveUiComponent'

storiesOf("Material-ui.ResponsiveUI", module)
.add('Reponsive Component', ()=>(
    <ResponesiveUiComponent/>)
);
