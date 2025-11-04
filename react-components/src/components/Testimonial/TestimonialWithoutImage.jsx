import dotsImage from '../../assets/testimonial/dots.png';
import Icon from './Icon';

import './Testimonial.css';

export default function TestimonialWithoutImage({ 
        icon, 
        company,
        name, 
        title, 
        children, 
        color}) {

    return (
        <div className="testimonial-without-image">
            <div 
                className="testimonial-without-image-content"
                style={{ '--dots-image': `url(${dotsImage})` }}
            >
                <div className="testimonial-without-image-content-header">
                    <Icon color={color}>{icon}</Icon>
                    <p>{company}</p>
                </div>
                <div className="testimonial-without-image-quote">
                    {children}
                </div>
                <div className="testimonial-without-image-attribution">
                    <b>{name}</b>
                    {company && <span> / {company}</span>}
                    {title && <span>{company ? ', ' : ' / '}{title}</span>}
                </div>
            </div>
        </div>
    );
}