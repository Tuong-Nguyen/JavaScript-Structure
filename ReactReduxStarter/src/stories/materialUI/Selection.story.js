/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Checkbox from 'material-ui/Checkbox';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormGroup, FormControlLabel,FormControl, FormLabel} from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import SwitchComponent from './../MaterialUiComponents/SwitchComponent';
import RadioGroupComponent from './../MaterialUiComponents/RadioGroupComponent';
storiesOf("material-ui.Selection", module)
  // TODO: Add disable and custom color checkboxes
  .add("Check box", ()=>(
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox value="1"/>} label="CheckA"/>
        <FormControlLabel control={<Checkbox value="2"/>} label="CheckB" />
        <FormControlLabel control={<Checkbox value="3"/>} label="Disable" disabled/>
        <FormControlLabel control={<Checkbox value="4" style={{color: "#00FF00"}}/>} label="Green" />
      </FormGroup>
    </div>
    ))
  // TODO: Add radio group with a label
  // TODO: Add disabled radio button
  .add("Radio", ()=>(
    <RadioGroupComponent/>
  ))
  // TODO: Add disabled and custom color switches
  // TODO: Add switches with label
  .add("Switches", ()=>(
    <div>
      <FormGroup>
        <FormGroup row>
          <Switch checked="true"/>
          <Switch />
          <SwitchComponent/>
        </FormGroup>
      </FormGroup>
    </div>
  ))
  .add("Form Switches", ()=>(
    <div>
      <FormGroup >
          <FormControlLabel control={<Switch checked="true"/>} label="A"/>
          <FormControlLabel control={<Switch/>} label="B"/>
          <FormControlLabel control={<Switch />} label="C" disabled/>
      </FormGroup>
    </div>
  ));
