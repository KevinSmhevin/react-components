import { BsStar } from "react-icons/bs"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCirclePlus, CiHeart } from "react-icons/ci";


import React from "react"

export default function Icon({ color = 'blue', children }) {

    return children ? (    
        <div className={`card-icon card-icon-${color}`}>
            {children}
        </div>
    ) : (
    <div className={`card-icon card-icon-${color}`}>
        <MdOutlineKeyboardArrowDown />
    </div>
    );
}