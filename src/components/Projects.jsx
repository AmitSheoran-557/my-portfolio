"use client";
import { useEffect } from "react";
import { PROJECTS_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import CustomHeading from "./common/CustomHeading";
import { RightArrow } from "@/utils/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects",
                start: "top 90%",
                end: "top 10%",
                toggleActions: "restart none none none",
                scrub: 3,
                duration: 2,
                markers: true,
            },
        });

        tl.from(".decorative-line", {
            y: -50,
            width: -1,
            duration: 2.6,
            stagger: 0.4,
            ease: "power2.out",
        })
            .from(".project-heading", {
                y: -40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.4")
            .from(".project-cards", {
                x: -400,
                opacity: 0,
                duration: 4,
                ease: "power4.out",
                touchAction: "reverse",
                stagger: {
                    amount: 2,
                    start: 0.9,
                    from: "start"
                },
                scrub: 4,
            }, "-=0.4");
    }, []);

    return (
        <div
            id="projects"
            className="bg-[#e1e2db] projects text-zinc-700 py-20 px-6 relative overflow-hidden"
        >
            {/* Decorative Lines */}
            <div className="decorative-line absolute top-10 left-0 w-full h-2 bg-gradient-to-l from-zinc-400 via-slate-400 to-transparent"></div>
            <div className="decorative-line max-w-28 absolute w-full h-20 -left-0 rotate-90 top-20 bg-zinc-400">
                <span className="absolute max-w-4 w-full h-40 -z-10 right-4 bottom-0 bg-black/50"></span>
            </div>
            <div className="decorative-line absolute top-0 right-0 max-w-xs w-full h-32 bg-zinc-400">
                <span className="absolute max-w-sm w-full min-h-6 left-0 bottom-[17px] animate-bounce bg-[#e1e2db]"></span>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="project-heading text-center mb-16">
                    <CustomHeading titleOne="My" titleTwo="Projects" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA_LIST.map((project, index) => (
                        <div className="project-cards" key={index}>
                            <div className=" bg-white/60 border border-zinc-300 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-md transition-all ease-linear duration-300 group relative">
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-slate-400/40 px-2 py-1 rounded text-zinc-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="text-sm font-medium text-blue-700 hover:underline flex gap-2 items-center max-w-max"
                                    >
                                        View Project <RightArrow />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
