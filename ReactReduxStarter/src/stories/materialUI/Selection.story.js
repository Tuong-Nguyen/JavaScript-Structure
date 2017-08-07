/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Checkbox from 'material-ui/Checkbox';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Switch from 'material-ui/Switch';

storiesOf("material-ui.Selection", module)
  // TODO: Add disable and custom color checkboxes
  .add("Check box", ()=>(
    <div>
      <FormGroup row>
        <FormControlLabel control={<Checkbox value="1"/>} label="CheckA"/>
        <FormControlLabel control={<Checkbox value="2"/>} label="CheckB" checked="true"/>
      </FormGroup>
    </div>
    ))
  // TODO: Add radio group with a label
  // TODO: Add disabled radio button
  .add("Radio", ()=>(
    <div>
      <FormGroup>
        <FormGroup row>
          <RadioGroup>
            <FormControlLabel value="Maile" control={<Radio checked="true"/>} label="Male" />
            <FormControlLabel value="FeMaile" control={<Radio/>} label="FeMale"/>
          </RadioGroup>
        </FormGroup>
      </FormGroup>
    </div>
  ))
  // TODO: Add disabled and custom color switches
  // TODO: Add switches with label
  .add("Switches", ()=>(
    <div>
      <FormGroup>
        <FormGroup row>
          <Switch checked="true"/>
          <Switch/>
        </FormGroup>
      </FormGroup>
    </div>
  ));
