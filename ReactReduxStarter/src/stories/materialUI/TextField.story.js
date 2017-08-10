/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TextField from 'material-ui/TextField';
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet({
  container:{
    flexWrap: 'wrap',
    display: 'flex'
  }
}
);
const arr = [1,2,3,4,5];
storiesOf("material-ui.TextFields", module)
  .add("Text TextFields Without Label",  withInfo("Info")(()=>(
    <TextField id="txtID" margin="normal" />
  )))
  .add("Text TextFields",  withInfo("Info")(()=>(
    <TextField id="txtID" label="ID" margin="normal" helperText="The id will be used to login" />
  )))
  .add("Disabled  TextFields",  withInfo("Info")(()=>(
    <TextField id="txtID" disabled label="ID" margin="normal"/>
  )))
  .add("Password TextFields",  withInfo("Info")(()=>(
    <TextField id="txtPass" label="Pass" type="password" margin="normal"/>
  )))
  .add("Combobox TextFields",  withInfo("Info")(()=>(
    <TextField id="txtCombobox" label="Combobox"  margin="normal" helperText="Combobox will support in next version"/>
  )))
  .add("Multiline TextFields",  withInfo("Info")(()=>(
    <TextField id="txtMultiline" label="Multiline" margin="normal" multiline defaultValue={`line1`+`\n`+`line2`}
     InputLabelProps={{
       shrink: true
     }}/>
  )))
  .add("Date TextFields",  withInfo("Info")(()=>(
    <TextField id="txtDate" label="Date" margin="normal" type="date" defaultValue="01-01-2017"
      InputLabelProps={{
        shrink: true
      }}/>
  )))
  .add("Time TextFields",  withInfo("Info")(()=>(
    <TextField id="txtTime" label="Time" margin="normal" type="time"
     InputLabelProps={{
       shrink: true
     }}/>
  )));
