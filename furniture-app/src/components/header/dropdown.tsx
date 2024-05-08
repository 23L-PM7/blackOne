"use client"
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import { Box, Switch } from '@mui/joy';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';

export function DropDown() {
    const [open, setOpen] = useState(false)

    const handleMouseEnter = () => {
        setOpen(true)
    }
    const handleMouseLeave = () => {
        setOpen(false)
    }
    return (
        <Dropdown open={open}>
            <MenuButton variant="plain" className='text-[25px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</MenuButton>
            <Menu className='p-6' variant="plain">
                <Grow onMouseEnter={handleMouseEnter}
                    in={open}
                    style={{ transformOrigin: '0 0 0', zIndex: 60000 }}
                    {...(open ? { timeout: 1000 } : {})}

                >
                    {sections}
                </Grow>
            </Menu>
        </Dropdown>
    )
}

const sections = (
    <div className='flex flex-col'>
        <a>Furniture</a>
        <a>Lighting</a>
        <a>Kids</a>
        <a>Gifts</a>
    </div>
);

