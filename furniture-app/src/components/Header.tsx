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
import { Favorite, Search, UserPro } from './items/HeaderIcons';


export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    return (
        <div>
            <Stack sx={{ flexGrow: 1, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 5000 }}>
                <AppBar position='static' >
                    <Stack direction='row' justifyContent='end' alignContent='center'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Stack>
                    <img src='images/logo.png' />
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
                        width: "100%"
                    }
                }
            }}>
                <Box
                    onClick={onToggleDrawer}
                    onKeyDown={onToggleDrawer}
                >
                    <div className='flex items-center'>
                        <Search />
                        <UserPro />
                        <Favorite />
                    </div>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </JoyDrawer>
        </Box>

    );
}
