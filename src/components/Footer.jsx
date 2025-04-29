import { FOOTER_SOCIAL_DATA_LIST } from "@/utils/helper";
import { UpArrow } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black-bg-2 bg-black -mt-1 bg-cover xl:pt-[127px] xl:pb-[120px] pt-24 pb-12">
            <div className="container px-3 mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-4/12 px-3 w-full max-lg:text-center">
                        <Link href="/">
                            <h4 className="font-hyper text-2xl tracking-[4%] text-white">NAKASHI</h4>
                        </Link>
                        <p className="text-xs font-light text-white tracking-[8%]">
                            COPYRIGHT © 2022. all rights reserved
                        </p>
                    </div>

                    <div className="md:w-4/12 max-lg:hidden px-3 w-full flex justify-center items-center max-lg:text-center">
                        <a href="#hero" className="gap-4 flex flex-col items-center">
                            <span className="animate-bounce"><UpArrow /></span>
                            <span className="lg:text-sm text-xs font-light animate-pulse text-white tracking-[8%]">BACK TO TOP</span>
                        </a>
                    </div>

                    <div className="md:w-4/12 px-3 w-full flex lg:justify-end justify-center items-center md:pt-0 pt-14">
                        <div className="flex gap-4">
                            {FOOTER_SOCIAL_DATA_LIST.map((item, i) => (
                                <Link href={item.path} key={i} target="_blank" className="xl:size-12 hover:bg-blue ease-linear duration-300 bg-white/30 bg-opacity-[10%] p-[14px] flex justify-center items-center rounded-full">
                                    <Image
                                        className="xl:size-5"
                                        src={item.iconImg}
                                        alt={item.alt}
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
