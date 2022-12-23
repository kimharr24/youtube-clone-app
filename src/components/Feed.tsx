import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed: React.FC = () => {
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
                Sidebar
                <Typography variant="body2" sx={{
                    mt: 1.5,
                    color: '#fff'
                }}>
                    Copyright 2022 - Harrison K.
                </Typography>
            </Box>
        </Stack>
    )
}

export default Feed;