/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
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
import Checkbox from 'material-ui/Checkbox';

storiesOf ('material-ui.List', module)
  .add('Normal List', () =>(
    <List>
      <ListItem button onClick={action('clicked')}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button onClick={action('clicked')}>
        <ListItemText primary="Help" />
      </ListItem>
    </List>
  )).add('Normal List + Divider', () =>(
  <List>
    <ListItem button onClick={action('clicked')}>
      <ListItemText primary="About" />
    </ListItem>

    <Divider/>

    <ListItem button onClick={action('clicked')}>
      <ListItemText primary="Help" />
    </ListItem>
  </List>
))
  .add('IconList', () =>(
    <List>
      <ListItem button onClick={action('clicked')}>
        <ListItemIcon>
          <Settings/>
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItem>
      <Divider/>
      <ListItem button onClick={action('clicked')}>
        <ListItemIcon>
          <NoteAdd/>
        </ListItemIcon>
        <ListItemText primary="Actions" />
      </ListItem>
    </List>
  ))
  .add('AvataList', () =>(
    <List>
      <ListItem button onClick={action('clicked')}>
        <Avatar>
          <FolderIcon/>
        </Avatar>
        <ListItemText primary="Gallery" />
      </ListItem>
      <Divider/>
      <ListItem button onClick={action('clicked')}>
        <Avatar alt="Gal Gadot" src={avata}>
        </Avatar>
        <ListItemText primary="Profile" />
        <ListItemSecondaryAction>
          <IconButton><CommentIcon/></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  ))
  .add('Secondary action List', () =>(
    <List>
      <ListItem button onClick={action('clicked')}>
        <Avatar alt="Gal Gadot" src={avata}>
        </Avatar>
        <ListItemText primary="Comment" />
        <ListItemSecondaryAction>
          <IconButton onClick={action('clicked')}><CommentIcon/></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button onClick={action('clicked')}>
        <ListItemIcon>
          <NoteAdd/>
        </ListItemIcon>
        <ListItemText primary="Checkbox" />
        <ListItemSecondaryAction>
          <Checkbox onClick={action('clicked')}><CommentIcon/></Checkbox>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  ));
