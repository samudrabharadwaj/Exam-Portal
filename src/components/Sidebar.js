import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, People, Assignment, LibraryBooks, AccountBalance } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/students">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/exam-details">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Exam Details" />
        </ListItem>
        <ListItem button component={Link} to="/questions">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Questions" />
        </ListItem>
        <ListItem button component={Link} to="/institutes">
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Institutes" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
