import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import image1 from '../../../assets/images/services/1.jpg'
import image2 from '../../../assets/images/services/2.jpg'
import image3 from '../../../assets/images/services/3.jpg'
import image4 from '../../../assets/images/services/4.jpg'
import image5 from '../../../assets/images/services/5.jpg'
import image6 from '../../../assets/images/services/6.jpg'

const Searvices = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <p className='text-red-300'>Service</p>
                <h1 className='text-2xl font-bold'>Our Service Area</h1>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='col-span-3 flex'>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10 mr-3">
                    <figure className="px-5 pt-5">
                        <img src={image1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10 mr-3">
                    <figure className="px-5 pt-5">
                        <img src={image2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Engine Diagnostics</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img src={image3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Car Repair</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
            </div>
            {/* second step */}
            <div className='col-span-3 flex'>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10 mr-3">
                    <figure className="px-5 pt-5">
                        <img src={image4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10 mr-3">
                    <figure className="px-5 pt-5">
                        <img src={image5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title">Engine Diagnostics</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
                <div className="card w-1/3 bg-amber-100 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img src={image6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Car Repair</h2>
                        <div className='text-red-400 flex justify-between'>
                            <p>Price : $20.00</p>
                            <a href="/"><FaArrowRight /></a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className='btn outline bg-red-600 m-10 '>More Services</button>
            </div>

        </div>
    );
};

export default Searvices;

