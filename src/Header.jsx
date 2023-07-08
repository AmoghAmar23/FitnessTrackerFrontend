import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { UserContext } from './App';


const Header = (props) => {    
    const drawerWidth = 240;
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Fitness Tracker
          </Typography>
          <Divider />
          <List>
          <Link href="/" underline="none" sx={{color:'#fff'}}>
            Home
          </Link>
          <Link href="/activities" underline="none" sx={{color:'#fff'}}>
            Activities
          </Link>
          <Link href="/routines" underline="none" sx={{color:'#fff'}}>
            Routines
          </Link>
          <Link href="/myroutines" underline="none" sx={{color:'#fff'}}>
            My Routines
          </Link>
          {sessionStorage.getItem("token") ? 
              <Button onClick={()=>{sessionStorage.clear()}} sx={{color:'#fff', fontWeight:'400'}}>
                Logout
                </Button>
                : JSON.parse( sessionStorage.getItem("user"))} 
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;
    
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Fitness Tracker
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link href="/" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Home
                </Link>
                <Link href="/routines" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Routines
                </Link>
                <Link href="/activities" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Activities
                </Link>
                <Link href="/myroutines" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  My Routines
                </Link>
                {sessionStorage.getItem("token") ? 
                <Button onClick={()=>{sessionStorage.clear()}} sx={{color:'#fff', fontWeight:'400'}}>
                  Logout
                </Button>
                : JSON.parse( sessionStorage.getItem("user"))} 
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      );
    }

export default Header