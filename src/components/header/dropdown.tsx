"use client"
import { quicksand } from '@/app/theme';
import { useState } from 'react';



export function DropDowns() {
    const [open, setOpen] = useState(false)

    const handleMouseEnter = () => {
        setOpen(true)
    }
    const handleMouseLeave = () => {
        setOpen(false)
    }

    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button className={`dropdown-toggle ${quicksand.className}`}>SHOP</button>
            {open && (
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>Dropdown content</li>
                    <li>Dropdown content</li>
                    <li>Dropdown content</li>
                    <li>Dropdown content</li>
                    <li>Dropdown content</li>
                    <li>Dropdown content</li>
                </ul>
            )
            }
        </div >
        // <Dropdown open={open}>
        //     <MenuButton variant="plain" className='flex justify-start text-[20px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</MenuButton>
        //     <Menu className='p-6' variant="plain">
        //         <Grow onMouseEnter={handleMouseEnter}
        //             in={open}
        //             style={{ transformOrigin: '0 0 0', zIndex: 60000 }}
        //             {...(open ? { timeout: 1000 } : {})}

        //         >
        //             {sections}
        //         </Grow>
        //     </Menu>
        // </Dropdown>
    );
}

