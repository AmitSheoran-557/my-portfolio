"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { SERVICES_DATA_LIST } from '@/utils/helper';

//----------------------------------------- Dynamically import Lottie with SSR disabled --------------------------------------
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


const Services = () => {
    return (
        <div id='services' className="services-section py-20 px-6 bg-gradient-to-b from-[#e1e2db] to-zinc-400">
            <h2 className="text-4xl font-semibold text-center mb-12 text-slate-400">
                My Services
            </h2>

            {/*--------------------------------------------- Decorative Divider Line ------------------------------------------*/}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mb-16"></div>
            <div className="max-w-6xl mx-auto">
                <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA_LIST.map((service, index) => (
                        <div key={index} className="service-card p-8 bg-white/50 border-4 border-zinc-300 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:border-custom group">
                            <div className="icon mb-6 transform group-hover:scale-125 transition duration-500 ease-in-out">
                                {/*------------------------------ Lottie Animation -------------------------------------------------*/}
                                <Lottie options={{
                                    animationData: service.animation,
                                    loop: true,
                                    autoplay: true,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }} height={140} width={140} />
                            </div>

                            <h3 className="text-2xl font-semibold text-custom mb-4 text-center">{service.title}</h3>
                            <p className="text-lg text-zinc-400 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*--------------------------------------------- Decorative Bottom Divider ------------------------------------------*/}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mt-16"></div>
        </div>
    );
};

export default Services;
