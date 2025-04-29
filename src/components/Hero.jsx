import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div id='hero' className='w-full flex bg-[#0cfe61e8] justify-center items-center'>
            <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 relative flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <div className="absolute top-0 left-0 w-16 h-1 bg-black rounded mb-4"></div>
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-gray-600 text-sm mb-2">Creative Portfolio</h2>
                        <h1 className="text-2xl font-bold mb-4">CREATIVE PORTFOLIO</h1>
                        <p className="text-gray-600 text-sm mb-4">www.reallygreatsite.com</p>
                        <div className="self-start">
                            <div className="border-t-4 border-l-4 border-black w-4 h-4 rotate-45 -mt-2 ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
