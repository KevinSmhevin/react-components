import React from "react"
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Icon({ style = 'success' }) {
    const getIcon = () => {
        switch (style) {
            case 'success':
                return <FaCheck />;
            case 'warning':
                return <FaExclamation />;
            case 'information':
                return <FaInfo />;
            case 'error':
                return <FaTimes />;
            default:
                return <FaCheck />;
        }
    };

    return (
        <div className={`popup-icon popup-icon-${style}`}>
            {getIcon()}
        </div>
    );
}