"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomHeading from "./common/CustomHeading";
import { ABOUT_ME_CARDS_DATA } from "@/utils/helper";


const AboutMe = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".decorative-line", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                end: "top 0%",

            },
            stagger: {
                amount: 2,
                start: 0.9,
                from: "start"
            },
            scaleX: 0,
            height: 0,
            transformOrigin: "left center",
            duration: 2,
            stagger: 0.2,
            ease: "power2.out",

        });

        gsap.from(".about-card", {
            x: 400,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
            stagger: {
                amount: 2,
                start: 0.9,
                from: "start"
            },
            scrollTrigger: {
                trigger: '.about',
                start: "top 70%",
                end: "top 0%",
                scrub: 3,
            }
        });
        gsap.from(".resume-btn", {
            y: 400,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
            stagger: {
                amount: 2,
                start: 0.9,
                from: "start"
            },
            scrollTrigger: {
                trigger: '.about',
                start: "top 40%",
                end: "top 0%",
                scrub: 3,
            }
        });
    }, []);

    return (
        <div id="about" className="relative about bg-gradient-to-b from-[#e1e2db] to-zinc-400 overflow-hidden px-6 py-20 flex items-center justify-center">
            {/* Decorative Lines */}
            <div className="decorative-line absolute top-0 left-1/4 h-full w-2 bg-zinc-400 opacity-70" />
            <div className="decorative-line absolute top-10 right-10 w-1/4 h-2 bg-gradient-to-l from-[#e1e2db] to-zinc-400 opacity-70" />

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl text-center">
                <CustomHeading titleOne="About" titleTwo="Me" />

                <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed">
                    I'm <span className="text-slate-600 font-semibold">Amit</span>, a frontend developer from Singhani, deeply passionate about UI/UX design and frontend performance.
                    I specialize in crafting elegant and performant user interfaces using{" "}
                    <span className="text-rose-400 font-semibold">React</span>,{" "}
                    <span className="text-emerald-400 font-semibold">Next.js</span>,{" "}
                    <span className="text-slate-500 font-semibold">Tailwind CSS</span> and{" "}
                    <span className="text-zinc-600 font-semibold">Bootstrap</span>.
                </p>

                <div className="mt-12 flex flex-wrap gap-6 text-left relative justify-center">
                    {ABOUT_ME_CARDS_DATA.map((card, index) => (
                        <div className="about-card" key={index}>
                            <div className="group relative transition-all ease-linear duration-300 max-w-[270px]">
                                <div className="bg-white/50 border relative z-10  border-zinc-300 rounded-xl p-6 h-48 backdrop-blur-xs shadow-sm">
                                    <h3 className="text-zinc-800 font-semibold text-lg mb-2">{card.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
                                </div>
                                <div className="w-10 h-10 bg-zinc-500 absolute rounded-full left-0 group-hover:-left-3 group-hover:-top-3 transition-all ease-linear duration-300 opacity-0 group-hover:!opacity-100 top-0"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 resume-btn">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-transparent border border-transparent hover:border-slate-600 hover:text-slate-600 transform transition-all ease-linear duration-300 inline-block"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
