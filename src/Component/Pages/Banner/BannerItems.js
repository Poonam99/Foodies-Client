import React from 'react';

const BannerItems = ({ slide }) => {
    const { image, previous, next, id, text } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carosel-image mx-auto'>
                <img alt='' src={image} className="w-11/12 rounded-xl" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-3/4 bottom-2 ">
                <a href={`#slide${previous}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;