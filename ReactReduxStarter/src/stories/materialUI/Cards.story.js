/* eslint-disable import/default */
/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react'
import {storiesOf, action} from '@storybook/react';
import Card, {CardContent, CardHeader, CardActions, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Share from  'material-ui-icons/Share';
import Loyalty from  'material-ui-icons/Loyalty';
import Expand from  'material-ui-icons/ExpandMore';
import Collapse from  'material-ui/transitions/Collapse';

// eslint-disable-next-line import/namespace
import avata from './../resources/avata.jpg';

class ComplexCard extends React.Component{
  constructor(){
    super();
    this.state = {
      expanded: status
    };
    this.handleExpandClick= this.handleExpandClick.bind(this);
  }
  handleExpandClick(){
    let status = !this.state.expanded
    this.setState({
      expanded: status
    })
  }
  render(){
    return (
      <div>
        <Card>
          <CardMedia>
            <img src={avata}/>
          </CardMedia>
          <CardContent>
            <Typography type="headline" component="h2">
              Headline
            </Typography>
            <Typography type="body1">
              adjective
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={action("clicked")}><Share/></IconButton>
            <IconButton onClick={action("clicked")}><Loyalty/></IconButton>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <Expand />
            </IconButton>
          </CardActions>

          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography type="headline" component="h2">
                blablblasdnlasdjoakisdjas
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
};
storiesOf('material-ui.Cards', module)
  .add('Simple', ()=>(
    <Card>
      <CardContent>
        <Typography type="headline" component="h2">
          Headline
        </Typography>
        <Typography type="body1">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={action("clicked")}>Action</Button>
      </CardActions>
    </Card>
  ))
  .add("Media", ()=>(
    <Card>
      <CardMedia>
        <img src={avata}/>
      </CardMedia>
      <CardContent>
        <Typography type="headline" component="h2">
          Headline
        </Typography>
        <Typography type="body1">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={action("clicked")}><Share/></IconButton>
        <IconButton onClick={action("clicked")}><Loyalty/></IconButton>
      </CardActions>
    </Card>

  )).add("Complex", ()=>(
    <ComplexCard/>
  ));
