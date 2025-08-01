import React from "react";
import work1 from "../assets/images/work (1).jpeg";
import work2 from "../assets/images/work (2).jpeg";
import work3 from "../assets/images/work (3).jpeg";
import work4 from "../assets/images/work (4).jpeg";
import work5 from "../assets/images/work (5).jpeg";
import work6 from "../assets/images/work (6).jpeg";


const Projects = () => {
    const woroks = [
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
        { img: work1, text: "Minimalist frontend crafted with React, Next.js, and Tailwind CSS, enhanced with GSAP animations for seamless interactivity" }
    ]

    return <div className="relative h-screen min-w-full flex flex-col p-13">


        <div className="wors relative h-[90%] w-[100%]  ">
            <img src={work1} className="h-[100%] w-[70%] object-cover  " alt="" />

            <p className="absolute right-10 text-1xl pl-250 bottom-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum maiores esse ipsa modi error.</p>
        </div>
    </div>;
};

export default Projects;
