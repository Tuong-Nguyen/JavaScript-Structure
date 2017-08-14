/**
 * Created by nttao on 8/1/2017.
 */
import React from 'react';
import Menu from 'material-ui-icons/Menu';
import Search from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuBar from "./MenuBar";
import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Tabs, {Tab} from 'material-ui/Tabs';
import SearchBox from './SearchBox';
import Notifications from 'material-ui-icons/Notifications';
import Add from 'material-ui-icons/Add';
import FilterList from 'material-ui-icons/FilterList';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 10,
    width: '100%'
  },
  tabs: {
    flex:1,
    marginLeft:20,
    marginRight:20
  },
  tab: {
    fontSize:12,
    textAlign:'left',
    color:"#FFFFFF"
  },
  notificationBar: {
    marginLeft: 10,
    float: 'right'
  },
  actionBar:{
    float:'bottom',
    display: "inherit",
    alignItems: "inherit"
  },
  badge:{
    marginTop:30,
    marginRight:10
  }
});

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isMenuOpen: false
    }
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu(){
    let status = !this.state.isMenuOpen;
    this.setState({
      isMenuOpen: status
    })
  }
  render(){
    const classes = this.props.classes;
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <Menu onClick={this.openMenu} />
            </IconButton>
            <div className={classes.tabs}>
              <Typography type="headline" color="inherit" component="h5">
                Actions
              </Typography>
              <Typography type="body1">
                <Tabs>
                  <Tab className={classes.tab} label="Action1"/>
                  <Tab className={classes.tab} label="Action2"/>
                </Tabs>
              </Typography>
            </div>
            <SearchBox/>
            <div>
              <div className={classes.notificationBar}>
                <Badge badgeContent={2} color="primary" classes={classes.badge}>
                    <Notifications/>
                </Badge>
                <Button fab color="primary" style={{fontSize:20,
                  width:40,
                  height:40,
                  padding:'none',
                  marginLeft:10}}>
                  JS
                </Button>
              </div>
              <div className={classes.actionBar}>
                <Button color="contrast" style={{
                  height:20,
                  fontSize:10
                }}>
                  <Add/> New Action
                </Button>
                <IconButton color="contrast">
                  <FilterList/>
                </IconButton>
              </div>
            </div>
            <MenuBar isOpen={this.state.isMenuOpen} openMenu={this.openMenu}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styleSheet)(Header);
