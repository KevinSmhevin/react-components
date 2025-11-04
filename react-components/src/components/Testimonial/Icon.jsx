import React from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Icon({ color = 'blue', children }) {

    return children ? (    
        <div className={`testimonial-icon testimonial-icon-${color}`}>
            {children}
        </div>
    ) : (
    <div className={`testimonial-icon testimonial-icon-${color}`}>
        <MdOutlineKeyboardArrowDown />
    </div>
    );
}