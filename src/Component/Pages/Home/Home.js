import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            {
                data.length
            }

        </div>
    );
};

export default Home;