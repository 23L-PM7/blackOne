"use client"
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useState } from 'react';

export function DropDown() {
    const [open, setOpen] = useState(false)
    function mouseOver() {
        console.log("hover")
    }
    const handleMouseEnter = e => {
        setOpen(true)
    }
    const handleMouseLeave = e => {
        setOpen(false)
    }
    return (
        <Dropdown open={open}>
            <MenuButton onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Format
            </MenuButton>
            <Menu>
                <MenuItem>xdfxf</MenuItem>
                …
            </Menu>
        </Dropdown>
    )
}