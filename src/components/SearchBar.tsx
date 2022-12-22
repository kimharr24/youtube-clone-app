import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar: React.FC = () => {
    const paperStyles = {
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        paddingLeft: 2,
        boxShadow: 'none',
        marginRight: { sm: 5 },
    };

    return (
        <Paper component="form" onSubmit={() => {}} sx={paperStyles}>
            <input type="text" className="search-bar" placeholder="Search" value="" onChange={() => {}} />
            <IconButton type="submit">
                <SearchOutlinedIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;