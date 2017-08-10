/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from './../MaterialUiComponents/MenuComponent';


storiesOf("Material-ui.Menu", module)
.add("Simple Menu", ()=>(
  <div>
    <MenuComponent/>
  </div>
));
