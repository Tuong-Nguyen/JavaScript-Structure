import React from 'react';
import {Link} from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calender from 'react-icons/lib/fa/calendar';
import Group from 'react-icons/lib/fa/group';
export const Menu = React.createClass({
  render(){
    return (
      <nav className="menu">
        <Link to="/" activeClassName="selected"><HomeIcon/></Link>
        <Link to="/skidaycount" activeClassName="selected"><SnowFlake/></Link>
        <Link to="/userlist" activeClassName="selected"><Calender/></Link>
        <Link to="/members" activeClassName="selected"><Group/></Link>
      </nav>);
  }
});
