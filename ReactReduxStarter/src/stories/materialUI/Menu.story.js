/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Menu, {MenuItem} from 'material-ui/Menu';
import MenuComponent from './../MaterialUiComponents/MenuComponent';


const arr= [1,3,5,7,9];
storiesOf("Material-ui.Menu", module)
.add("Menu Info", withInfo("infor")(()=>(
  <div>
    <Menu
      open={false}
    >
      {arr.map((item, index) => (
        <MenuItem key={item}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  </div>
)))
.add("Simple Menu", ()=>(
<div>
  <MenuComponent/>
</div>
));
