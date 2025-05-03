"use client";
import React, { useEffect } from "react";
import CustomHeading from "./common/CustomHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Introduction = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".trigger-section",
                start: "top 70%",
                end: "bottom center",
                toggleActions: "restart none none none",
            }
        });

        tl.from(".custom-heading", {
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: "power3.out",
        })
            .from(".intro-heading", {
                opacity: 0,
                y: -50,
                duration: 1.2,
                ease: "power3.out",
            }, "-=0.8")
            .from(".intro-subheading", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out",
            }, "-=1")
            .from(".intro-buttons", {
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "back.out(1.7)",
            }, "-=0.9")
            .from(".decorative-lines", {
                y: -50,
                width: 0,
                height: 0,
                duration: 1.5,
                stagger: 0.,
                ease: "power3.out",

            }, "-=0.8");
    }, []);

    return (
        <div className="trigger-section">
            <div className="w-full h-1 bg-zinc-400 pb-4"></div>
            <div className="relative py-60 bg-gradient-to-b to-zinc-400 from-[#e1e2db] overflow-hidden flex flex-col w-full items-center justify-center px-6">
                {/* Decorative Lines */}
                <div className="absolute top-0 left-20 w-2 h-full bg-zinc-500 decorative-lines"></div>
                <div className="absolute top-0 right-20 w-2 h-full bg-zinc-500 decorative-lines"></div>
                <div className="absolute top-10 right-10 w-1/4 h-2 bg-zinc-500 decorative-lines"></div>
                <div className="absolute bottom-10 left-10 w-1/4 h-2 bg-zinc-500 decorative-lines"></div>

                {/* Main Content */}
                <div className="max-w-3xl text-center z-20">
                    <CustomHeading
                        titleOne="Introduction"
                        customClass="uppercase absolute left-24 top-20 custom-heading"
                    />
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-zinc-700 mb-6 intro-heading">
                        Hey, I'm <span className="text-slate-600">Amit</span> 👋
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed intro-subheading">
                        A passionate{" "}
                        <span className="text-slate-500 font-semibold">Frontend Developer</span> crafting sleek,
                        responsive web experiences using React, Next.js, Tailwind CSS, and Bootstrap.
                        I love transforming ideas into interactive designs.
                    </p>
                    <div className="mt-8 flex justify-center gap-4 intro-buttons">
                        <button className="bg-slate-500 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-[#e1e2db] hover:text-slate-500 border border-transparent hover:border-slate-500 transition-all ease-linear duration-300">
                            Hire Me
                        </button>
                        <button className="hover:bg-slate-500 cursor-pointer border border-slate-500 text-slate-500 px-5 py-2 rounded-lg hover:text-white bg-[#e1e2db] transition-all ease-linear duration-300">
                            View Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
