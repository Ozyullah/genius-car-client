import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicessItems from './ServicessItems';


const Searvices = () => {
    const [dataes, setDataes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(info => setDataes(info))
    }, []);
    console.log(dataes)
    return (
        <div className='mt-10'>

            <div className='text-center'>
                <p className='text-red-300'>Service</p>
                <h1 className='text-2xl font-bold'>Our Service Area</h1>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    dataes.map(data => <ServicessItems key={data._id} data={data}></ServicessItems>)
                }
            </div>

            <div className='flex justify-center'>
                <button className='btn outline bg-red-400 m-10 '>More Services</button>
            </div>
        </div>
    );
};

export default Searvices;

