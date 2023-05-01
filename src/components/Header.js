// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
// import { Menu } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
// }));

// const Header = () => {
//   const classes = useStyles();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//           onClick={toggleSidebar}
//         >
//           <Menu />
//         </IconButton>
//         <Typography variant="h6">ADMIN DASHBOARD</Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">ADMIN DASHBOARD</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Header;










