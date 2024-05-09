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
import { Bag, Favorite, Remove, Search, UserPro } from '../items/HeaderIcons';




import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import ListDivider from '@mui/joy/ListDivider';
import ListItemContent from '@mui/joy/ListItemContent';
import { Input, colors } from '@mui/joy';
import Link from 'next/link';
import { sectionlists } from './HeaderList';
import { DropDowns } from './dropdown';
import { data } from '../shop/ShopList';
import { cinzel, quicksand } from '@/app/theme';









export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
    const [bagOpenDrawer, setBagOpenDrawer] = React.useState(false);
    const [isOpenDrawerTop, setIsOpenDrawerTop] = React.useState(false);


    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
    const toggleDrawerBag = () => setBagOpenDrawer(!bagOpenDrawer)
    const toggleDrawerBagTop = () => setIsOpenDrawerTop(!isOpenDrawerTop)
    return (
        <div>
            <Stack sx={{ flexGrow: 1, bottom: 0, left: 0, right: 0, zIndex: 5000, ...cinzel.style }} >
                <AppBar position='static' >
                    <div className='p-2 md:px-[30px] md:py-[15px] flex  bg-[#EDECE9] items-center justify-between '>
                        <a href='/'>
                            <img src='images/logo.png' className='w-[200px] h-[50px] lg:w-[300px]  lg:h-[60px] text-6xl' />
                        </a>
                        <div className='hidden md:hidden lg:hidden xl:hidden 2xl:flex font-narmol text-[25px]  justify-around w-[600px] cursor-pointer text-black '>
                            <a className='transition hover:underline'><DropDowns /></a>
                            {sectionlists.map((sectionlist) => (
                                <Link
                                    key={sectionlist.id}
                                    href={sectionlist.link}>
                                    <div className='hover:underline'>
                                        {sectionlist.title}
                                    </div>
                                </Link>
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
                </AppBar>
                <Drawer open={isOpenDrawer} onToggleDrawer={toggleDrawer} />
                <DrawerMobile open={bagOpenDrawer} onToggleDrawerBag={toggleDrawerBag} />
                <TopDrawer open={isOpenDrawerTop} onToggleDrawerTop={toggleDrawerBagTop} />
            </Stack>

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




type DrawerProps = {
    open: boolean;
    onToggleDrawer: () => void
}




export function Drawer(props: DrawerProps) {
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
                    <div className='flex items-center gap-4 md:hidden'>
                        <Search />
                        <UserPro />
                        <Favorite />
                    </div>
                    <Divider />
                    <div className='flex-col flex font-narmol text-xl text-[25px] mt-[20px] gap-y-4'>
                        <DropDowns />
                        {sectionlists.map((sectionlist) => (
                            <Link
                                key={sectionlist.id}
                                href={sectionlist.link}>
                                {sectionlist.title}
                            </Link>
                        ))}
                    </div>
                </Box>
            </JoyDrawer >
        </Box >

    );
}

type BagDrawerProps = {
    open: boolean;
    onToggleDrawerBag: () => void
}


export function DrawerMobile(props: BagDrawerProps) {
    const { open, onToggleDrawerBag } = props



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