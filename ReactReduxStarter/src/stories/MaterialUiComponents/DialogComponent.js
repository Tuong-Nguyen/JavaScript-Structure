/**
 * Created by nttao on 8/10/2017.
 */
import React,{ PropTypes} from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';


export default class DialogComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false
    }
  }
  const
  handleRequestClose = () => {
    this.setState({open: false});
  }
  const
  handleRequestOpen = () => {
    this.setState({open: true});
  }
  const
  render(){
    return (
      <div>
        <Button onClick={this.handleRequestOpen}>Open Dialog</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
DialogComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
