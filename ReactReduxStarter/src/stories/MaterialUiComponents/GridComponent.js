/**
 * Created by nttao on 8/9/2017.
 */
import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: 240
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%'
  },
  control: {
    padding: theme.spacing.unit * 2
  }
}));

class GridComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      direction: 'row',
      justify: 'center',
      align: 'center',
      spacing: 0
    }
  }
  handleChange = key =>(event, value)=>{
    this.setState({
      [key]: value
    });
  };
  render(){
    const classes = this.props.classes;
    const {align, direction, justify, spacing} = this.state;
    return(
      <div>
        <Grid container className={classes.root}>
          <Grid container xs={12}
            >
            <Grid
              container
              className={classes.demo}
              align={align}
              direction={direction}
              justify={justify}
              spacing={spacing}
            >
              {[0, 1, 2].map(value =>
                <Grid key={value} item>
                  {/*<Paper*/}
                    {/*className={classes.paper}*/}
                    {/*style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}*/}
                  {/*>*/}
                    {/*{`Cell ${value + 1}`}*/}
                  {/*</Paper>*/}
                  <div style={{backgroundColor: "#eb15ff"}}>
                    <span>{value}</span>
                  </div>
                </Grid>,
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <FormLabel>direction</FormLabel>
                  <RadioGroup
                    name="direction"
                    aria-label="direction"
                    selectedValue={direction}
                    onChange={this.handleChange('direction')}
                  >
                    <FormControlLabel value="row" control={<Radio />} label="row" />
                    <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                    <FormControlLabel value="column" control={<Radio />} label="column" />
                    <FormControlLabel
                      value="column-reverse"
                      control={<Radio />}
                      label="column-reverse"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormLabel>justify</FormLabel>
                  <RadioGroup
                    name="justify"
                    aria-label="justify"
                    selectedValue={justify}
                    onChange={this.handleChange('justify')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel
                      value="space-between"
                      control={<Radio />}
                      label="space-between"
                    />
                    <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormLabel>align</FormLabel>
                  <RadioGroup
                    name="align"
                    aria-label="align"
                    selectedValue={align}
                    onChange={this.handleChange('align')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                    <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormLabel>Spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    selectedValue={spacing}
                    onChange={this.handleChange('spacing')}
                  >
                    <FormControlLabel value={0} control={<Radio />} label="0" />
                    <FormControlLabel value={8} control={<Radio />} label="8" />
                    <FormControlLabel value={16} control={<Radio />} label="16" />
                    <FormControlLabel value={24} control={<Radio />} label="24" />
                    <FormControlLabel value={40} control={<Radio />} label="40" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styleSheet)(GridComponent);
