"use client"
import { cinzel, quicksand } from '@/app/theme';
import { useState } from 'react';
import Link from '@mui/joy/Link';



export function DropDowns() {
    const [open, setOpen] = useState(false)

    const handleMouseEnter = () => {
        setOpen(true)
    }
    const handleMouseLeave = () => {
        setOpen(false)
    }

    const categorylists = [
        {
            src: "https://plus.unsplash.com/premium_photo-1676638154798-904c8f6282d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
            title: "FURNITURE",
        },
        {
            src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
            title: "LIGHTING",
        },
        {
            src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
            title: "KIDS",
        },
        {
            src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
            title: "ACCESSORIES",
        },
        {
            src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
            title: "GIFTS",
        },
    ];


    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Link href="/shop" className='text-black' underline="none">
                < button className={`dropdown-toggle text-[18px] ${cinzel.className}`}>SHOP</button>
            </Link>
            {
                open && (
                    <ul className="dropdown-content absolute  p-2 shadow bg-white rounded-box w-52 z-50">
                        {categorylists.map((categorylist) => (
                            <li className='mb-[5px]'><a>{categorylist.title}</a></li>
                        ))}
                    </ul>
                )
            }
        </div >
    );
}

