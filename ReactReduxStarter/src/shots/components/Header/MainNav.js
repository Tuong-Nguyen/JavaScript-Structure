import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import NavItem from './NavItem';

const styleSheet = createStyleSheet(theme => ({
  mainNav: {
    backgroundColor: theme.palette.primary[800],
    height: '64px',
  },
  nav: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%'
  }
}));

const MainNav = (props) => {
  const { classes } = props;

  const navItems = [
    {
      title: 'Shots',
      subTitles: ["Popular", "Recent", "Debuts", "Teams", "Playoffs", "Highlights", "Projects"]
    },
    {
      title: 'Designers',
      subTitles: ["Find Designers", "Design Teams", "Add Your Design Team"]
    },
    {
      title: 'Blog',
      subTitles: ["Latest Stories"]
    },
    {
      title: 'Podcast',
      subTitles: ["Latest Episodes"]
    },
    {
      title: 'Meetups',
      subTitles: ["Dribbble Meetups"]
    },
    {
      title: 'Jobs',
      subTitles: ["All", "Remote / Anywhere", "Team Hirings"]
    },
    {
      title: '...',
      subTitles: ["About", "Shop", "Support", "Places", "Buckets", "Colors", "Integrations"]
    }
  ];

  const navItemNodes = navItems.map(item => <NavItem key={item.title} title={item.title} subTitles={item.subTitles} />)

  return (
    <nav className={classes.mainNav}>
      <ul className={classes.nav}>
        {navItemNodes}
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(MainNav);