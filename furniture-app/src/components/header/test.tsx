"use client"
import { useState } from "react"
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { DropDown } from "./dropdown";

export function TESTER() {
    const [dropState, setDropState] = useState(false)
    const [open, setOpen] = useState("")

    function mouseOver() {
        setDropState(true)
    }

    function mouseLeave() {
        setDropState(false)
    }

    return (
        <div>
            {/* {dropState &&  } */}
            <DropDown />

        </div >)
}

