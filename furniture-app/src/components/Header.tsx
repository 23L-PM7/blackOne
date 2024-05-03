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
import { Bag, Favorite, Remove, Search, UserPro } from './items/HeaderIcons';
import { Anchor } from '@mui/icons-material';


import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import ListDivider from '@mui/joy/ListDivider';
import ListItemContent from '@mui/joy/ListItemContent';








export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
    const [bagOpenDrawer, setBagOpenDrawer] = React.useState(false);

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    const toggleDrawerBag = () => setBagOpenDrawer(!bagOpenDrawer)
    return (
        <div>
            <Stack sx={{ flexGrow: 1, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 5000 }} >
                <AppBar position='static' >
                    <div className='p-2 flex  bg-[#EDECE9] items-center justify-between'>
                        <img src='images/logo.png' className='w-[200px]' />
                        <button onClick={toggleDrawerBag}> <Bag /></button>
                        {/* <Drawer anchor="right">
                            
                        </Drawer> */}
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
                <DrawerMobile open={bagOpenDrawer} onToggleDrawerBag={toggleDrawerBag} />
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

type BagDrawerProps = {
    open: boolean;
    onToggleDrawerBag: () => void
}


function DrawerMobile(props: BagDrawerProps) {
    const { open, onToggleDrawerBag } = props

    const data = [
        {
            src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
            title: 'Chair',
            price: 1000,
            icon: <Remove />
        },
        {
            src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
            title: 'Table',
            price: 1000,
            icon: <Remove />
        },
        {
            src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
            title: 'Table',
            price: 900,
            icon: <Remove />
        },

    ];

    return (
        <Box sx={{ display: 'flex' }} >
            <JoyDrawer open={open} onClose={onToggleDrawerBag} anchor='right' slotProps={{
                content: {
                    sx: {
                        backgroundColor: 'white',
                        padding: 4,
                        overflow: 'scroll'
                    }
                }
            }}
            >
                <Box sx={{}}
                    onClick={onToggleDrawerBag}
                    onKeyDown={onToggleDrawerBag}
                >
                    <div className='flex-col flex gap-y-8'>
                        <div className='flex justify-end'>
                            <Remove />
                        </div>
                        {data.map((item, index) => (
                            <React.Fragment key={item.title}>
                                <ListItem>
                                    <ListItemButton sx={{ gap: 2 }}>
                                        <AspectRatio sx={{ flexBasis: 160 }}>
                                            <img
                                                srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.src}?w=120&fit=crop&auto=format`}
                                                alt={item.title}
                                            />

                                        </AspectRatio>
                                        <ListItemContent>
                                            <Typography fontWeight="md">{item.title}</Typography>
                                            <Typography level="body-sm">{item.price}</Typography>
                                        </ListItemContent>
                                    </ListItemButton>
                                </ListItem>
                                {index !== data.length - 1 && <ListDivider />}
                            </React.Fragment>
                        ))}
                    </div>
                </Box>
            </JoyDrawer>
        </Box>
    );
}