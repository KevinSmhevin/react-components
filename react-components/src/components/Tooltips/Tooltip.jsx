import { useState } from 'react';
import { createPortal } from 'react-dom';
import { LuInbox } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Button from '../Button/Button';
import './Tooltip.css';

export default function Tooltip({ title, color = 'blue', style = 'bold', children, isOpen: controlledIsOpen, onClose }) {
    const [internalIsOpen, setInternalIsOpen] = useState(true);
    
    // Use controlled state if provided, otherwise use internal state
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            setInternalIsOpen(false);
        }
    };

    if (!isOpen) return null;

    const tooltipContent = (
        <div className="tooltip-overlay" onClick={handleClose}>
            <div className={`tooltip tooltip-${style} tooltip-${color}`} onClick={(e) => e.stopPropagation()}>
                <div className="tooltip-header">
                    <div className="tooltip-icon-wrapper">
                        <LuInbox className="tooltip-icon" />
                    </div>
                    <div className="tooltip-title">{title}</div>
                    <Button 
                        className="tooltip-close-button"
                        onClick={handleClose}
                        aria-label="Close tooltip"
                    >
                        <RxCross2 />
                    </Button>
                </div>
                <div className="tooltip-text">{children}</div>
                <div className="tooltip-pointer"></div>
            </div>
        </div>
    );

    return createPortal(tooltipContent, document.body);
}