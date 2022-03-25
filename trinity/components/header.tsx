import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' color='white' sx={{ flexGrow: 1 }}>
          メディラボ
        </Typography>
        <Link href='/' passHref>
          <Button>
            <Typography color='white'>合格実績</Typography>
          </Button>
        </Link>
        <Link href='/' passHref>
          <Button>
            <Typography color='white'>担当する講師陣</Typography>
          </Button>
        </Link>
        <Link href='/' passHref>
          <Button>
            <Typography color='white'>使用する教材</Typography>
          </Button>
        </Link>
        <Link href='/' passHref>
          <Button>
            <Typography color='white'>料金</Typography>
          </Button>
        </Link>
        <Link href='/contact' passHref>
          <Button>
            <Typography color='white'>お問い合わせ</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
