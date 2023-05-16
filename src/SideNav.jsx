import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

// Icons //
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// CSS //
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';

import Swal from "sweetalert2";

import './App.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenList(false);
  };

  const [openList, setOpenList] = React.useState(true);

  const handleClick = () => {
    setOpenList(!openList);
    setOpen(true);
  };

  let navigate = useNavigate ();

  function HandleNav (path) {
  navigate(path);
}

const handleLogout = () => {
  Swal.fire({
    text: "Logging Out...",
    icon: "info",
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1500
})
  .then ( () => {
  localStorage.removeItem("token");
  window.location.href = "/login"})
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='toolbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{color: "black"}} />
          </IconButton>
          <Typography id="title" variant="h6" noWrap component="div">
            CRUD Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: "#FFAC30" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <div id="drawer-list">
          <List sx={{ backgroundColor: "#FFAC30" }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={()=>HandleNav("/dashboard")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>

          <List sx={{ backgroundColor: "#FFAC30" }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={handleClick}
                sx={{
                  minHeight: 48,
                  justifyContent: openList ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >

                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Employee" sx={{ opacity: open ? 1 : 0 }} />
                {openList ? <ExpandLess sx={{ display: open ? "block" : "none" }} /> : <ExpandMore  sx={{ display: open ? "block" : "none" }}  />}
              </ListItemButton>

              <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={()=>HandleNav("/employee/add")} >
                    <ListItemIcon>
                      <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Employee" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4.5 }} onClick={()=>HandleNav("/employee/manage")} >
                    <ListItemIcon>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Employee" />
                  </ListItemButton>
                </List>
              </Collapse>
            </ListItem>
          </List>

          <List sx={{ backgroundColor: "#FFAC30" }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={()=>HandleNav("/about")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <List sx={{ backgroundColor: "#FFAC30" }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText onClick={ handleLogout } primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}