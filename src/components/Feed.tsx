import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../assets/fetchFromAPI';

const Feed: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('New');

    // useEffect(() => {
    //     const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    //     console.log('changed');
    // }, [selectedCategory])

    return (
        <Stack direction='row' sx={{
            flexDirection: {
                sx: 'column',
                md: 'row'
            }
        }}>
            <Box sx={{
                height: {
                    sx: 'auto',
                    md: '92vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: {
                    sx: 0,
                    md: 2
                }
            }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Typography variant="body2" sx={{
                    mt: 1.5,
                    color: '#fff'
                }}>
                    Copyright 2022 - Harrison K.
                </Typography>
            </Box>

            <Box sx={{
                p: 2,
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'white'
                }}>
                    {selectedCategory} <span style={{ color: '#FC1503' }}>Videos</span>
                </Typography>
                
            </Box>
        </Stack>
    )
}

export default Feed;