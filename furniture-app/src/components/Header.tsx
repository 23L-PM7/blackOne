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

export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    return (
        <Stack sx={{ flexGrow: 1, position: 'fixed', bottom: 0, left: 0, right: 0, }} className='z-50'>
            <AppBar position='static' >
                <Stack direction='row' justifyContent='end'>
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

            </AppBar>
            <Drawer open={isOpenDrawer} onToggleDrawer={toggleDrawer} />
        </Stack>
    );
}



type DrawerProps = {
    open: boolean;
    onToggleDrawer: () => void
}

type Size = 'sm' | 'md' | 'lg';


function Drawer(props: DrawerProps) {
    const { open, onToggleDrawer } = props


    return (
        <Box sx={{}}>
            <JoyDrawer open={open} onClose={onToggleDrawer}>
                <Box
                    onClick={onToggleDrawer}
                    onKeyDown={onToggleDrawer}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
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
