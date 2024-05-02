'use client'

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import JoyDrawer from '@mui/joy/Drawer';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Bag, Favorite, Search, UserPro } from './items/HeaderIcons';


export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    return (
        <div>
            <Stack sx={{ flexGrow: 1, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 5000 }} >
                <AppBar position='static' >
                    <div className='p-2 flex  bg-[#EDECE9] items-center justify-between'>
                        <img src='images/logo.png' className='w-[200px]' />
                        <Bag />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            // sx={{ mr: 2, }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </AppBar>
                <Drawer open={isOpenDrawer} onToggleDrawer={toggleDrawer} />
            </Stack>
        </div>
    );
}



type DrawerProps = {
    open: boolean;
    onToggleDrawer: () => void
}




function Drawer(props: DrawerProps) {
    const { open, onToggleDrawer } = props


    return (
        <Box sx={{ display: 'flex' }}>
            <JoyDrawer open={open} onClose={onToggleDrawer} slotProps={{
                content: {
                    sx: {
                        width: "100%",
                        backgroundColor: 'rgba(237, 236, 233, 1)'
                    }
                }
            }}
            >
                <Box sx={{ padding: 4, marginTop: 8, marginLeft: 2 }}
                    onClick={onToggleDrawer}
                    onKeyDown={onToggleDrawer}
                >
                    <div className='flex items-center gap-4'>
                        <Search />
                        <UserPro />
                        <Favorite />
                    </div>
                    <Divider />
                    <div className='flex-col flex font-narmol text-xl mt-[20px] gap-y-4'>
                        {['Shop', 'orders', 'About', 'Projects'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </div>
                </Box>
            </JoyDrawer>
        </Box>

    );
}
