import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {blueGrey} from '@mui/material/colors'

import {Link} from 'react-router-dom'



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar  color='secondary' position="fixed" sx={{ minHeight:'6rem'  , justifyContent:'center', backdropFilter:'blur(0.3rem)' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <img className='is-hidden-mobile' src="/images/logo-removebg-preview.png" alt="" style={{maxWidth:'6rem'}}/>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"

                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },

                            fontWeight: 700,

                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        بازرگانی خیرالله نیا
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <img src="/images/logo-removebg-preview.png" alt="" style={{maxWidth: '6rem'}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/'>


                                        <Typography sx={{ textAlign: 'center' }}>خانه </Typography>
                                    </Link>
                                </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/about'>

                                    <Typography sx={{ textAlign: 'center' }}>درباره ما</Typography>
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/publications'>

                                    <Typography sx={{ textAlign: 'center' }}>مقالات</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/contact'>

                                    <Typography sx={{ textAlign: 'center' }}> اطلاعات تماس</Typography>
                                </Link>
                            </MenuItem>



                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Dr. Sattarzadeh
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent:'left' }}>


                        <Link to='/'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                صفحه اصلی
                            </Button>

                        </Link>



                        <Link to='/about'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                درباره ما
                            </Button>



                        </Link>







                        <Link to='/publications'>


                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                مقالات
                            </Button>
                        </Link>



                        <Link to='/contact'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                 تماس با ما
                            </Button>

                        </Link>











                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;