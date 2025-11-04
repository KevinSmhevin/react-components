import { BsStar } from "react-icons/bs"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCirclePlus, CiHeart } from "react-icons/ci";


import React from "react"

export default function Icon({ children }) {
    return (    
        <div className="card-icon">
            {children}
        </div>
    );
}