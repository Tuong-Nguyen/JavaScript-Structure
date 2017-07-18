/**
 * Created by nctuong on 7/18/2017.
 */

import React from 'react';
import {Link} from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import ListDaysIcon from 'react-icons/lib/fa/table';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';

export const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/" activeClassName="selected"><HomeIcon/></Link>
      <Link to="/add-day" activeClassName="selected"><AddDayIcon/></Link>
      <Link to="/list-days" activeClassName="selected"><ListDaysIcon/></Link>
    </nav>
  );
};
