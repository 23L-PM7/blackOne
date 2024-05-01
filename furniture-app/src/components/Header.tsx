import Image from 'next/image';
import AspectRatio from '@mui/joy/AspectRatio';
import { IoBagOutline } from "react-icons/io5";

import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';


export function Header() {
    return (
        <div>
            <img src="https://plus.unsplash.com/premium_photo-1671070687931-ee34e2b67bfc?q=80&w=3326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chair" />
            <div className="flex items-center w-full p-4">
                <img src="images/logo.png" alt="logo " className='w-6/12' />
                <IoBagOutline className="w-3/12" />
                <IoBagOutline className="w-3/12" />
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                    >
                        <MoreVert />
                    </MenuButton>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Dropdown>
            </div>
        </div>
    )
}