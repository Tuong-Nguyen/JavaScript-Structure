/**
 * Created by lnthao on 8/8/2017.
 */
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import List, {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List';

export default class ListAndButtonWithMotion extends Component {
  dataItems = [
    {id: 1, folder:"Documents"},
    {id: 2, folder:"Pictures"},
    {id: 3, folder:"Videos"},
    {id: 4, folder:"Musics"}
  ];

  state = {
    height: 38
  }
  animate = () => {
    console.log(Date.now() + '----' + this.state.height);
    this.setState((state) => ({ height: state.height === 400 ? 40 : 400 }))
  }
  render() {
    return (
      <div>
        <Button raised color="accent" onClick={this.animate}>Animate</Button>
        <Motion style={{ height: spring(this.state.height) }}>
          {
            ({ height }) =>
              <List style={Object.assign({}, { height } )}>
              {this.dataItems.map(item =>
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.folder}/>
                </ListItem>
              )}
            </List>
          }
        </Motion>
      </div>
    );
  }
}
