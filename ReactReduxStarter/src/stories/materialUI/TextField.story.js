/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import TextField from 'material-ui/TextField';
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet({
  container:{
    flexWrap: 'wrap',
    display: 'flex'
  }
}
);

storiesOf("material-ui.TextFields", module)
  .add("TextFields", ()=>(
    <div>
      <TextField id="txtID" label="ID" margin="normal" /> <br/>
      <TextField id="txtPass" label="Pass" type="password" margin="normal"/> <br/>
      <TextField id="txtCombobox" label="Combobox" type="" margin="normal"/> <br/>
      <TextField id="txtMultiline" label="Multiline" margin="normal" multiline defaultValue={`line1`+`\n`+`line2`}
       InputLabelProps={{
         shrink: true
       }}/> <br/>
      <TextField id="txtDate" label="Date" margin="normal" type="date" defaultValue="01-01-2017"
        InputLabelProps={{
          shrink: true
        }}/> <br/>
      <TextField id="txtTime" label="Time" margin="normal" type="time"
       InputLabelProps={{
         shrink: true
       }}/> <br/>
    </div>
  ));
