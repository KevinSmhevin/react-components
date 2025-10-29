import React, { useState } from 'react';
import './Badge.css';

export default function Badge({ color = 'blue', shape = 'square', size = 'medium', children }) {
    return <div className={`badge badge-${color} badge-${shape} badge-${size}`}>{children}</div>;
}