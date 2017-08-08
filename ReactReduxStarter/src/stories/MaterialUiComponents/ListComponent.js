/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, {ListItem, ListItemSecondaryAction, ListItemIcon, ListItemText} from 'material-ui/List';
import Settings from 'material-ui-icons/Settings';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import CommentIcon from 'material-ui-icons/Comment';
import IconButton from 'material-ui/IconButton';
// eslint-disable-next-line import/namespace,import/default
import avata from './../resources/avata.jpg';

export const MaterialList = React.createClass({
    menuItemClick(){
      console.log('clicked')
    },
    render(){
      return (
        <List>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <NoteAdd/>
            </ListItemIcon>
            <ListItemText primary="Actions" />
          </ListItem>

          <Divider/>

          <ListItem button onClick={this.menuItemClick}>
            <Avatar>
              <FolderIcon/>
            </Avatar>
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <Avatar alt="Gal Gadot" src={avata}>
            </Avatar>
            <ListItemText primary="Profile" />
            <ListItemSecondaryAction>
              <IconButton><CommentIcon/></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider/>

          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemIcon>
              <NoteAdd/>
            </ListItemIcon>
            <ListItemText primary="Actions" />
          </ListItem>

          <Divider/>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={this.menuItemClick}>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      )
    }
  });

