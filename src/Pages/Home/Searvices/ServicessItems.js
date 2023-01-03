import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const ServicessItems = ({ data }) => {
    const { _id ,img, price, title } = data;
    console.log(img)

    return (
        <div className=''>
            
                <div className=''>
                    <div className="card bg-amber-100 shadow-xl mt-10 mr-5">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <div className='text-red-400 flex justify-between'>
                                <p>Price : {price}</p>
                                <Link to={`/checkout/${_id}`}><FaArrowRight /></Link>
                            </div>

                        </div>
                    </div>
                </div>
          
        </div>
    );
};

export default ServicessItems;