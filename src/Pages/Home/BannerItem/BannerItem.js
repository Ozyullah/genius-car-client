import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {

    const { image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='cover-img'>
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-8 bottom-12">
                <button className="btn btn-outline btn-warning mr-4 text-xs">Discover More</button>
                <button className="btn btn-outline btn-warning text-xs">Latest Project</button>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-8 top-1/4 text-white">
                <h1 className='text-3xl'>Affordable<br />
                    Price For Car <br />
                    Servicing<br />

                </h1>
            </div>
            <div className='absolute flex transform -translate-y-1/2 left-8 top-2/4 text-sm text-white'>
                <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
        </div>
    );
};

export default BannerItem;