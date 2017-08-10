/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormGroup, FormControlLabel,FormControl, FormLabel} from 'material-ui/Form';

export default class RadioGroupComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      selected: ""
    };
  }
  render(){
    return(
      <div>
        <FormControl>
          <FormLabel>
            Gender
          </FormLabel>
          <FormGroup row>
            <RadioGroup selectedValue={this.state.selected}
                        onChange={(event, value)=>{this.setState({selected: value});}}>
              <FormControlLabel value="Maile" control={<Radio/>} label="Male" />
              <FormControlLabel value="FeMaile" control={<Radio/>} label="FeMale"/>
              <FormControlLabel value="Oher" control={<Radio/>} label="FeMale"/>
              <FormControlLabel value="Disable" control={<Radio/>} label="Disable" disabled  />
            </RadioGroup>
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}
