import React from 'react';
import img1 from '../../../Images/Banner/Img1.jpeg';
import img2 from '../../../Images/Banner/Img2.jpeg';
import img3 from '../../../Images/Banner/Img3.jpeg';
import img4 from '../../../Images/Banner/Img4.jpeg';
import img5 from '../../../Images/Banner/Img5.jpeg';
import img6 from '../../../Images/Banner/Img6.jpeg';
import BannerItems from './BannerItems';
const Banner = () => {

    const bannerData = [
        {
            image: img1,
            id: 1,
            previous: 6,
            next: 2
        },
        {
            image: img2,
            id: 2,
            previous: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            previous: 2,
            next: 4
        },
        {
            image: img4,
            id: 4,
            previous: 3,
            next: 5
        },
        {
            image: img5,
            id: 5,
            previous: 4,
            next: 6
        },
        {
            image: img6,
            id: 6,
            previous: 5,
            next: 1
        }
    ]
    return (
        <div className="carousel max-w-screen-xl mx-auto py-10">
            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;