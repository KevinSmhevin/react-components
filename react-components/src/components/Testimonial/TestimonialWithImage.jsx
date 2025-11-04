import quoteImage from '../../assets/testimonial/quote.png';
import './Testimonial.css';

export default function TestimonialWithImage({ img, name, title, children }) {
    return (
        <div className="testimonial-with-image">
            <div className="testimonial-with-image-image">
                <img src={img} alt={name} />
            </div>
            <div className="testimonial-with-image-content">
                <img src={quoteImage} alt="Quote" />
                {children}
                <b>{name}</b>
                <p>{title}</p>
            </div>
        </div>
    );
}