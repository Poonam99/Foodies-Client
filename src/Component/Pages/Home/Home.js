import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const data = useLoaderData();
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../Images/aboutus.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    const container2 = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../Images/location.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    return (
        <div>
            <Banner></Banner>
            {
                data.slice(0, 3).map(service =>
                    <div key={service._id}>
                        <section className="dark:bg-gray-800 dark:text-gray-100">
                            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-center">
                                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                    <PhotoProvider>
                                        <PhotoView src={service.image}>
                                            <img src={service.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                                        </PhotoView>
                                    </PhotoProvider>

                                </div>
                                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                        {service.name}
                                    </h1>
                                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                                        {service.description.slice(0, 100)}...
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>$ {service.price}</p>
                                        <p>{service.rating}</p>
                                    </div>
                                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
                                        <Link to={`/services/${service._id}`} className='btn btn-outline btn-ghost'>Details</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            }
            <div className='flex justify-center items-center'>
                < Link to={'/services'}><button className='btn btn-outline btn-ghost'>See All</button></Link>
            </div>
            <div>
                <div>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">Delivery
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    We have delivery service for our foodies. By paying a little extra you can get your food in your doorstep.
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <div ref={container2}></div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">About Us
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    A foodie is a person who has an ardent or refined interest in food, and who eats food not only out of hunger but also as a hobby. The related terms "gastronome" and "gourmet" define roughly the same thing, i.e. a person who enjoys food for pleasure.
                                    I am a foodie too. Thats why i provide for servies for other foodies too.
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <div ref={container}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
};

export default Home;