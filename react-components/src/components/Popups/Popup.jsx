import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import './Popup.css';

export default function Popup({ title, style = 'success', children, onClose }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            if (onClose) {
                // Delay to allow fade-out animation before calling onClose
                setTimeout(() => {
                    setIsVisible(false);
                    onClose();
                }, 300);
            } else {
                setTimeout(() => {
                    setIsVisible(false);
                }, 300);
            }
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    const popupContent = (
        <div className={`popup popup-${style} ${isFadingOut ? 'popup-fade-out' : ''}`}>
            <div className="popup-header">
                <Icon style={style} />
                <h3 className="popup-title">{title}</h3>
            </div>
            <div className="popup-body">
                {children}
            </div>
        </div>
    );

    return createPortal(popupContent, document.body);
}