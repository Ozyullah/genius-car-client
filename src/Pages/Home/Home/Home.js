import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Searvices from '../Searvices/Searvices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Searvices></Searvices>
        </div>
    );
};

export default Home;