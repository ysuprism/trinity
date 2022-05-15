import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

const Layout: NextPage = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h5' sx={{ flexGrow: 1 }}>
              <Link href='/'>Medical Trinity</Link>
            </Typography>
            <div>
              <IconButton size='large' color='inherit' onClick={handleMenu} sx={{ mx: 2 }}>
                <MenuIcon />
              </IconButton>
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href='/contact'>お問い合わせ</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>合格実績</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
      {children}
    </div>
  );
};

export default Layout;
