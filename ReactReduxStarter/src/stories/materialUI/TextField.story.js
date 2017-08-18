/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import TextField from 'material-ui/TextField';
import DropdownBoxComponent from './../MaterialUiComponents/DropdownBoxComponent';
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
// TODO: Add input without label
  .add("Text TextFields Without Label", ()=>(
    <TextField id="txtID" margin="normal" />
  ))
// TODO: Add disabled input
  .add("Disabled  TextFields", ()=>(
    <TextField id="txtID" disabled label="ID" margin="normal"/>
  ))
  .add("Text TextFields", ()=>(
      <TextField id="txtID" label="ID" margin="normal" helperText="The id will be used to login" />
  )).add("Password TextFields", ()=>(
    <TextField id="txtPass" label="Pass" type="password" margin="normal"/>
  )).add("Combobox TextFields", ()=>(
    <TextField id="txtCombobox" label="Combobox"  margin="normal"/>
  )).add("Multiline TextFields", ()=>(
    <TextField id="txtMultiline" label="Multiline" margin="normal" multiline defaultValue={`line1`+`\n`+`line2`}
     InputLabelProps={{
       shrink: true
     }}/>
  )).add("Date TextFields", ()=>(
    <TextField id="txtDate" label="Date" margin="normal" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      InputLabelProps={{
        shrink: true
      }}/>
  )).add("Time TextFields", ()=>(
    <TextField id="txtTime" label="Time" margin="normal" type="time"
     InputLabelProps={{
       shrink: true
     }}/>
  )).add("Dropdwon TextFields", ()=>(
    <DropdownBoxComponent/>
  ));
