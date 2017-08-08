/**
 * Created by nttao on 8/8/2017.
 */
import React from 'react';
import {withStyle, ceateStyleSheet} from 'material-ui/styles';
import {CircularProgress, LinearProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import SaveIcon from 'material-ui-icons/Save';


export default class LinearProgressComponent extends React.Component{
  constructor(){
    super();
    this.state={
      completed: 0
    };
  }
  componentDidMount(){
    setInterval(this.progress,500);
  }
  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: completed + diff });
    }
  };
  render(){
    const classes = this.props.classes;
    return(
      <div>
        <LinearProgress mode="determinate" value={this.state.completed}/>
        <br />
        <LinearProgress color="accent" mode="determinate" value={this.state.completed}/>
      </div>
    );
  }
}

export class CircularProgressComponent extends React.Component{
  constructor(){
    super();
    this.state={
      completed: 0
    };
  }
  componentDidMount(){
    setInterval(this.progress,500);
  }
  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: completed + diff });
    }
  };
  render(){
    const classes = this.props.classes;
    return(
      <div>
        <CircularProgress mode="determinate" value={this.state.completed}/>
        <br />
        <CircularProgress color="accent" mode="determinate" value={this.state.completed}/>
      </div>
    );
  }
}

export class CircularInteractiveProgressComponent extends React.Component{
  constructor(){
    super();
    this.state={
      loading: true,
      success: false
    };

  }
  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 2e3);
        },
      );
    }
  };
  render(){
    const classes = this.props.classes;
    return(
      <div>
        <Button fab color="primary"  onClick={this.handleButtonClick}>
          {this.state.success ? <CheckIcon /> : <SaveIcon />}
        </Button>
        {this.state.loading && <CircularProgress size={60}
                                                 style={{color: "#00FF00",
                                                         position: 'absolute',
                                                         top: -2,
                                                         left: -2
                                                        }} /> }
      </div>
    );
  }
}
