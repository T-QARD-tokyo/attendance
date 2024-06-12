import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          勤怠管理システム
        </Typography>
        <Button color="inherit" component={Link} href="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} href="/attendance-management">
          勤怠管理
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
