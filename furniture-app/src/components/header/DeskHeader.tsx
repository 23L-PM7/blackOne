'use client'

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Bag, Favorite, Remove, Search, UserPro } from '../items/HeaderIcons';
import { CiCircleRemove } from "react-icons/ci";

import JoyDrawer from '@mui/joy/Drawer';
import { Drawer, DrawerMobile } from './Header';
import { Box, Divider, Input } from '@mui/joy';



export function DeskHeader() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
    const [bagOpenDrawer, setBagOpenDrawer] = React.useState(false);
    const [isOpenDrawerTop, setIsOpenDrawerTop] = React.useState(false);

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    const toggleDrawerBag = () => setBagOpenDrawer(!bagOpenDrawer)
    const toggleDrawerBagTop = () => setIsOpenDrawerTop(!isOpenDrawerTop)
    return (
        <div className=' hidden xl:flex'>
            <Stack sx={{ flexGrow: 1, bottom: 0, left: 0, right: 0, zIndex: 5000 }} >
                <AppBar position='static' >
                    <div className='p-2 md:px-[30px] md:py-[15px] flex  bg-[#EDECE9] items-center justify-between '>
                        <a href='http://localhost:3000/'>
                            <img src='images/logo.png' className='w-[200px] h-[50px] lg:w-[300px]  lg:h-[60px] text-6xl' />
                        </a>
                        <div className='hidden md:hidden lg:hidden xl:hidden 2xl:flex font-narmol text-[25px]  justify-around w-[600px]'>
                            {['Shop', 'orders', 'About', 'Projects'].map((text) => (
                                <ListItem key={text}>
                                    <ListItemButton>{text}</ListItemButton>
                                </ListItem>
                            ))}
                        </div>
                        <div className='items-center flex gap-4'>

                            <div className='items-center gap-6 hidden md:flex text-[40px]'>
                                <button onClick={toggleDrawerBagTop}><Search /></button>
                                <UserPro />
                                <Favorite />
                            </div>

                            <button className='p-2 flex items-center text-black' onClick={toggleDrawerBag}> <Bag />(0)</button>
                            <div className='2xl:hidden'>
                                <IconButton
                                    edge="start"
                                    sx={{
                                        color: 'black',
                                    }}
                                    aria-label="menu"
                                    // sx={{ mr: 2, }}
                                    onClick={toggleDrawer}
                                >
                                    <MenuIcon sx={{ fontSize: '50px', }} />
                                </IconButton>
                            </div>

                        </div>
                    </div>
                </AppBar >
                <Drawer open={isOpenDrawer} onToggleDrawer={toggleDrawer} />
                <DrawerMobile open={bagOpenDrawer} onToggleDrawerBag={toggleDrawerBag} />
                <TopDrawer open={isOpenDrawerTop} onToggleDrawerTop={toggleDrawerBagTop} />
            </Stack >
        </div >
    );
}

type TopDrawerProps = {
    open: boolean;
    onToggleDrawerTop: () => void
}


export function TopDrawer(props: TopDrawerProps) {
    const { open, onToggleDrawerTop } = props


    return (
        <Box sx={{ display: 'flex' }}>
            <JoyDrawer open={open} onClose={onToggleDrawerTop} slotProps={{
                content: {
                    sx: {
                        width: "100%",
                        backgroundColor: 'rgba(237, 236, 233, 1)'
                    }
                }
            }}
            >
                <Box sx={{ padding: 4, marginTop: 8, marginLeft: 2 }}
                    onClick={onToggleDrawerTop}
                    onKeyDown={onToggleDrawerTop}
                >
                    <div className='flex items-center gap-4 md:hidden'>
                        <Search />
                        <UserPro />
                        <Favorite />
                    </div>
                    <Divider />
                    <div className='flex justify-center'>
                        <Input
                            color="neutral"
                            disabled={false}
                            placeholder="Search Products..."
                            size="lg"
                            variant="plain"
                        />
                    </div>
                </Box>
            </JoyDrawer >
        </Box >

    );
}

