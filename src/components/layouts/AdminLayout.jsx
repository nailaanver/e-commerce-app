import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import InventoryIcon from '@mui/icons-material/Inventory'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'


import { Link, Outlet } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/Helpers';
// dropdown
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { useLocation } from 'react-router-dom';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: "#2C2C2C",
  color: "#FFFFFF",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: "#2C2C2C",
  color: "#FFFFFF",
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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#1F1F1F",
  color: "#FFFFFF",
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

// link to list items

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: '/admin/dashboard' },
  { text: 'Orders', icon: <CategoryIcon />, path: '/admin/orders' },
  { text: 'Shipping', icon: <LocalShippingIcon />, path: '/admin/shipping' },
  { text: 'Payments', icon: <PaymentIcon />, path: '/admin/payements' },
];

const bottomMenuItems = [
  { text: 'Settings', icon: <SettingsIcon />, path:'/admin/settings' },
  { text: 'Help', icon: <HelpIcon /> },
  { text: 'Report', icon: <ReportIcon /> },
  { text: 'Logout', icon: <LogoutIcon /> },
];

function AdminLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState("Dashboard");
  const [openProducts, setOpenProducts] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

const location = useLocation();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     <AppBar position="fixed" open={open}>
  <Toolbar>
    {/* --- Menu Button (when drawer is closed) --- */}
    {!open && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ marginRight: 5 }}
      >
        <MenuIcon />
      </IconButton>
    )}

    {/* --- Close Button (when drawer is open, shown left of Dashboard) --- */}
    {open && (
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={handleDrawerClose}
        edge="start"
        sx={{ marginRight: 2 }}
      >
        <MenuIcon />
      </IconButton>
    )}

    {/* --- Title --- */}
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      Dashboard
    </Typography>

    {/* --- Profile Icon + Dropdown Menu --- */}
    <Box>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem  onClick={() => setAnchorEl(null)}>Profile</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
      </Menu>
    </Box>
  </Toolbar>
</AppBar>


      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: "center", color: "#f57c00", fontSize: 22 }}
          >
            Cohus
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': { backgroundColor: "#f57c00", color: "#FFF" },
                  '&.Mui-selected': {
                    // backgroundColor: "#f57c00",
                    color: "#FFF",
                    // '& .MuiListItemIcon-root': { color: "#FFF" },
                  },
                }}
                selected={selectedMenu === item.text}
                onClick={() => setSelectedMenu(item.text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? 3 : 'auto',
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* --- Products Dropdown --- */}
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                if (open) {   
                  setOpenProducts(!openProducts);
                }
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': { backgroundColor: "#f57c00", color: "#FFF" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  mr: open ? 3 : 'auto',
                  color: "inherit",
                }}
              >
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0 }} />
   
              {open && (openProducts ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>

          <Collapse in={open && openProducts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedMenu === "Product List"}
                href='/admin/products/product-list'
                onClick={() => setSelectedMenu("Product List")}
              >
                <ListItemText primary="Product List" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4, }}
                selected={selectedMenu === "Add Product"}
                href='/admin/products/add-products'
                onClick={() => setSelectedMenu("Add Product")}
              >
                <ListItemText primary="Add Product" />
              </ListItemButton>

              {/* <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedMenu === "Product Filter"}
                onClick={() => setSelectedMenu("Product Filter")}
              >
                <ListItemText primary="Product Filter" />
              </ListItemButton> */}
            </List>
          </Collapse>

        </List>

        <Divider />
        <List>
          {bottomMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': { backgroundColor: "#f57c00", color: "#FFF" },
                  '&.Mui-selected': {
                    // backgroundColor: "#f57c00",
                    color: "#FFF",
                    '& .MuiListItemIcon-root': { color: "#FFF" },
                  },
                }}
                selected={selectedMenu === item.text}
                onClick={() => setSelectedMenu(item.text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? 3 : 'auto',
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

const AuthorizedAdminLayout = () => {
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    const userData = getFromLocalStorage('user_data');
    if (userData) {
      setRole(JSON.parse(userData).role);
    } 
  }, []);

  if (!role) 
  //   return <Link to={'/admin-login'}>AdminLogin</Link>;
  // if (role === 'admin') return <AdminLayout />;
  // return <p>Unauthorized user</p>;

  return <AdminLayout/>
};

export default AuthorizedAdminLayout;
