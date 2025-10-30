import React from 'react'
import './Banner.css';


const banners = import.meta.glob('../../assets/banners/*.png', { eager: true, import: 'default' });


export default function Banner({ status, children }) {
    const count = React.Children.count(children);
    const image = banners[`../../assets/banners/${status}.png`];

    console.log(image)
    if (count > 1) {

        const childrenArray = React.Children.toArray(children)
        const title = childrenArray[0]
        const content = childrenArray.slice(1)

        return (
            <div className={`banner banner-${status} banner-multi`}>
                <div className="banner-title">
                    <img src={image} alt={`${status} icon`} />
                    {title}
                </div>
                <div className="banner-content">
                    {content}
                </div>
            </div>
        );
    }

    return (
        <div className={`banner banner-${status} banner-single`}>
            <img src={image} alt={`${status} icon`} />
            {children}
        </div>
    );
}