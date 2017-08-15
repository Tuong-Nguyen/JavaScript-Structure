/* eslint-disable import/namespace,import/default */
/**
 * Created by nttao on 8/2/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avata from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Table, {TableRow, TableCell, TableBody, TableHead} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
// eslint-disable-next-line import/namespace
import avata from './../resources/avata.jpg';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 100,
    width: '100%',
    borderLeft: '4px solid #FF5722'
  },
  title:{
    fontSize: 14,
    color: "#BDBDBD"
  },
  avata: {
    margin:15,
    marginLeft:20
  },
  infor:{
    margin:10
  }
});

const GG = {name: 'Gal Gadot',
            age:32,
            gender: 'FeMale'}

class PaperComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const classes = this.props.classes;
    return(
      <div>
        <Paper className={classes.root}>
          <Grid container>
            <Grid xs="2">
              <Avata src={avata} className={classes.avata} />
            </Grid>
            <Grid xs="10">
              <div className={classes.infor}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography type="healine" className={classes.title}>
                          Name
                        </Typography>
                        <Typography type="body1">
                          {GG.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography type="healine" className={classes.title}>
                          Age
                        </Typography>
                        <Typography type="body1">
                          {GG.age}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography type="healine" className={classes.title}>
                          Gender
                        </Typography>
                        <Typography type="body1">
                          {GG.gender}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
PaperComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styleSheet)(PaperComponent);
