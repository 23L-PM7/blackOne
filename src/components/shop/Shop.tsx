'use client'
import * as React from 'react';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Option from '@mui/joy/Option';
import { GoPlus } from "react-icons/go";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Link from 'next/link';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';

export function Shopping() {
    return (
        <div className="container mx-auto bg-[#EDECE9]">
            <div className="py-[50px] px-[20px]">
                <div className="text-black flex justify-center items-center text-[46px] ">OUR <br></br>PRODUCTS</div>
                <Stack spacing={2} className="bg-[#EDECE9]">
                    <Select defaultValue="CATEGORY" variant="plain" className="bg-[#EDECE9]">
                        <Option value="CATEGORY">Dog</Option>
                        <Option value="cat">Cat</Option>
                        <Option value="fish">Fish</Option>
                        <Option value="bird">Bird</Option>
                    </Select>
                    <Select defaultValue="MATERIAL" variant="plain" className="bg-[#EDECE9]" >
                        <Option value='ass'>Dog</Option>
                        <Option value="cat">Cat</Option>
                        <Option value="fish">Fish</Option>
                        <Option value="bird">Bird</Option>
                    </Select>
                    <Select defaultValue="COLOR" variant="plain" className="bg-[#EDECE9]">
                        <Option value="dog">Dog</Option>
                        <Option value="cat">Cat</Option>
                        <Option value="fish">Fish</Option>
                        <Option value="bird">Bird</Option>
                    </Select>
                </Stack>
                <Dropdown>
                    <div className='mt-[30px] flex border-b-4 items-center w-6/12  mx-auto justify-between'>

                        <MenuButton
                            variant="plain"
                            size="lg">
                            SORT BY

                        </MenuButton>
                        <Menu
                            variant="plain"
                            size="lg">
                            <MenuItem>BEST SELLING</MenuItem>
                            <MenuItem>NEW ADDITIONS</MenuItem>
                            <MenuItem>PRICE LOW TO HIGH</MenuItem>
                        </Menu>
                        <GoPlus />
                    </div>
                </Dropdown>
                <a>
                    <AspectRatio
                        variant="outlined"
                        ratio="4/3"
                        sx={{
                            width: '100%',
                            bgcolor: 'background.level2',
                            marginBottom: '35px',

                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            alt="A beautiful landscape."
                        />
                        <Typography level="h2" component="div">
                            4/3
                        </Typography>
                    </AspectRatio>
                </a>

            </div>
        </div >
    );
} 