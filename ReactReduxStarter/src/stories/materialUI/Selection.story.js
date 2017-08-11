/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Checkbox from 'material-ui/Checkbox';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormGroup, FormControlLabel,FormControl, FormLabel} from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import SwitchComponent from './../MaterialUiComponents/SwitchComponent';
import RadioGroupComponent from './../MaterialUiComponents/RadioGroupComponent';
storiesOf("material-ui.Selection", module)
  // TODO: Add disable and custom color checkboxes
  .add("Check box", withInfo("Info")(()=>(
    <div>
      <Checkbox value="1"/> <br />
        <FormControlLabel control={<Checkbox value="1"/>} label="CheckA"/><br />
        <FormControlLabel control={<Checkbox value="2"/>} label="CheckB" /><br />
        <FormControlLabel control={<Checkbox value="3"/>} label="Disable" disabled/><br />
        <FormControlLabel control={<Checkbox value="4" style={{color: "#00FF00"}}/>} label="Green" />
    </div>
    )))
  // TODO: Add radio group with a label
  // TODO: Add disabled radio button
  .add("Radio", withInfo("Info")(()=>(
    <RadioGroupComponent/>
  )))
  // TODO: Add disabled and custom color switches
  // TODO: Add switches with label
  .add("Switches", withInfo("Info")(()=>(
    <div>
      <FormGroup>
        <FormGroup row>
          <Switch checked="true"/> <span>A</span>
          <Switch />
          <SwitchComponent/>
        </FormGroup>
      </FormGroup>
    </div>
  )))
  .add("Form Switches", withInfo("Info")(()=>(
    <div>
      <FormGroup >
          <FormControlLabel control={<Switch checked="true"/>} label="A"/>
          <FormControlLabel control={<Switch/>} label="B"/>
          <FormControlLabel control={<Switch />} label="C" disabled/>
      </FormGroup>
    </div>
  )));
