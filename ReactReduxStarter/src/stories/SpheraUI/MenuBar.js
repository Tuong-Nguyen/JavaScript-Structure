/* eslint-disable import/namespace */
/**
 * Created by nttao on 8/1/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import Home from 'material-ui-icons/Home';
import Settings from 'material-ui-icons/Settings';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import CommentIcon from 'material-ui-icons/Comment';
// eslint-disable-next-line import/namespace,import/default
import avata from './../resources/avata.jpg';

export class  MenuContent extends React.Component{
  render(){
    return(
      <div>
        <Typography type="headline">
          <h2><IconButton>
            <Home/>
          </IconButton>
          Phera</h2>
        </Typography>
        <List>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <NoteAdd/>
            </ListItemIcon>
            <ListItemText primary="Actions" />
          </ListItem>

          <Divider/>

          <ListItem button onClick={this.menuItemClick}>
            <Avatar alt="Gal Gadot" src={avata}>
            </Avatar>
            <ListItemText primary="Profile" />
            <ListItemSecondaryAction>
              <IconButton><CommentIcon/></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default class DrawerMenu extends React.Component{
  constructor(props){
    super(props);
  }
  menuItemClick(){
    console.log('clicked');
  }
  render(){
    const {isOpen, openMenu} = this.props;
    return(
      <Drawer
        open={isOpen}
        onClick={openMenu}>
        <MenuContent/>
      </Drawer>
    );
  }
}
MenuContent.propTypes = {
  classes: PropTypes.object.isRequired
};
Drawer.propTypes = {
  classes: PropTypes.object.isRequired
};
