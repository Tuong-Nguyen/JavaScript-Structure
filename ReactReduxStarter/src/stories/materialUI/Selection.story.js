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
  .add("Check box", ()=>(
    <div>
      <FormGroup row>
        <FormControlLabel control={<Checkbox value="1"/>} label="CheckA"/>
        <FormControlLabel control={<Checkbox value="2"/>} label="CheckB" checked="true"/>
      </FormGroup>
    </div>
    ))
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
