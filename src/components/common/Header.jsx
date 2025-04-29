"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { HEADER_DATA_LIST, } from '@/utils/helper';
import Image from 'next/image';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handler = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (isOpen && window.innerWidth < 1025) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);

        return () => {
            document.body.classList.remove("overflow-hidden");
            window.removeEventListener("resize", handleOverflow);
        };
    }, [isOpen]);
    return (
        <div className='bg-white fixed z-50 top-0 backdrop-blur-lg w-full lg:py-4 py-3'>
            <nav className="bg-black/35 max-w-[1272px] mx-auto px-4 lg:py-6 py-5 w-full flex justify-between items-center lg:pe-10 lg:ps-[88px] max-lg:px-10 max-md:px-7 max-sm:px-5 rounded-[60px] border-white/15 border backdrop-blur-xl">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center lg:gap-10 md:gap-7 gap-4">
                        <button onClick={handler} className="flex flex-col items-center z-[100] gap-1 lg:hidden relative w-[18px] h-[14px]" >
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`}></span>
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
                        </button>
                        <Link href="/"><h2 className="font-bold font-integral lg:text-[32px] md:text-3xl text-[25px] !leading-[100%] text-white">AMIT</h2></Link>
                    </div>
                    <div className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:z-[90] transition-transform duration-300 ${isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"}`}>
                        <div className="flex items-center lg:gap-9 gap-7 max-lg:flex-col max-lg:justify-center">
                            {HEADER_DATA_LIST.map((item, i) => (
                                <Link onClick={handler} href={item.path} key={i} className='font-medium lg:text-lg flex items-center text-white cursor-pointer'>{item.title} {item.icon} </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header