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
import { quicksand } from '@/app/theme';

export function DropDowns() {
    const [open, setOpen] = useState(false)

    const handleMouseEnter = () => {
        setOpen(true)
    }
    const handleMouseLeave = () => {
        setOpen(false)
    }
    return (
        <Dropdown open={open}>
            <MenuButton variant="plain" className='flex justify-start text-[20px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</MenuButton>
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
    <div className={`flex flex-col px-4 py-6 text-[25px] font-medium ${quicksand.className}`}>
        <a>Furniture</a>
        <a>Lighting</a>
        <a>Kids</a>
        <a>Gifts</a>
    </div>
);

