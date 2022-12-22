import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../assets/constants';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
    const stackStyles = {
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
    };
  
    return (
        <Stack direction="row" alignItems="center" sx={stackStyles}>
            <Link to="/">
                <img src={logo} alt="logo" height={45}/>
            </Link>
            <SearchBar />
        </Stack>
    );
};

export default Navbar;