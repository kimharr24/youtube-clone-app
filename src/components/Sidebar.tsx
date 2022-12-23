import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../assets/constants';

interface SidebarProps {
    selectedCategory: string;
    setSelectedCategory: (callback: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction="row" sx={{
            overflowY: 'auto',
            height: {
                sx: 'auto',
                md: '95%'
            },
            flexDirection: {
                md: 'column'
            }
        }}>
            {categories.map((category) => {
                return (
                    <button onClick={() => setSelectedCategory(category.name)} className="category-btn" style={{
                        color: 'white',
                        background: category.name === selectedCategory ? '#FC1503' : 'inherit'
                    }} key={category.name}>
                        <span style={{
                            color: category.name === selectedCategory ? 'white' : 'red',
                            marginRight: '15px'
                        }}>{category.icon}
                        </span>
                        <span style={{
                            opacity: category.name === selectedCategory ? 1 : 0.8
                        }}>{category.name}
                        </span>
                    </button>
                )
            })}
        </Stack>
    );
};

export default Sidebar;