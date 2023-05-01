
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, People, Assignment, LibraryBooks, AccountBalance, Assessment } from '@material-ui/icons';

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

const Sidebar = ({ isOpen, onClose }) => {
  const classes = useStyles();

  const handleDrawerClose = () => {
    onClose && onClose();
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
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
        <ListItem button component={Link} to="/aboutExam">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="AboutExam " />
        </ListItem>
        <ListItem button component={Link} to="/setexam">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="SetExam" />

        </ListItem>
        <ListItem button component={Link} to="/institutes">
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Institutes" />
        </ListItem>

        <ListItem button component={Link} to="/ResultAnalysis">
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="ResultAnalysis" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;









