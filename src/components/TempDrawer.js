import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import {Link} from 'react-router-dom';



export default function TempDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >



  <List>

      <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <    HouseboatOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
        </ListItem>
     </Link>

      <Link to="/characters" style={{ textDecoration: 'none', color: 'black'}}>
          <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Characters" />
                </ListItemButton>
          </ListItem>
      </Link>

      <Link to="/houses" style={{ textDecoration: 'none', color: 'black'}}>
            <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SecurityOutlinedIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Houses" />
                  </ListItemButton>
            </ListItem>
      </Link>

      <Link to="/orders" style={{ textDecoration: 'none', color: 'black'}}>
            <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FlagOutlinedIcon   />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                  </ListItemButton>
            </ListItem>
      </Link>

      {/* <Link to="/tree" style={{ textDecoration: 'none', color: 'black'}}>
            <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountTreeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tree" />
                  </ListItemButton>
            </ListItem>
      </Link> */}

      <Link to="/battle" style={{ textDecoration: 'none', color: 'black'}}>
            <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SportsKabaddiOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Battle" />
                  </ListItemButton>
            </ListItem>
      </Link>



  </List>


      <Divider />

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}