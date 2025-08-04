import React, { useEffect } from "react";
import Serviese_card from "../Subcomponnet/Serviese_card";

import card2 from "../assets/images/cards (2).jfif";
import card3 from "../assets/images/cardsimg (3).jfif";
import card6 from "../assets/images/cardsimg (5).jfif";
import cardimg from "../assets/images/cardimg.jfif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlurText from "../components/Text";
gsap.registerPlugin(ScrollTrigger);

const sharedCountClass =
    "text-[1.5vw] p-4 pl-7 drop-shadow-[0_0_10px_blue] rounded-full absolute z-12 cardnum bg-gradient-to-b from-blue-700 to-blue-600 bg-clip-text text-transparent";

const sharedImageClass =
    "h-[100%] w-[100%] hover:scale-1 object-cover opacity-100 rounded-2xl transition-transform duration-500 ease-out hover:scale-105";

const card1Styles = {
    containerClass: "relative gap-1 overflow-hidden aa bg-[#060709] rounded-2xl",
    countClass: sharedCountClass,
    contentClass:
        "content z-4 absolute p-6 bottom-10 text-[#dddddd] gap-1 flex flex-col",
    titleClass: "text-[3vw]",
    descClass: "text-2xl",
    imageClass: sharedImageClass,
    overlayClass: "bg-gradient absolute top-0 left-0 h-[100%] w-[100%]",
};

const card2Styles = {
    containerClass: "relative gap-1 overflow-hidden aa bg-[#060709] rounded-2xl",
    countClass: sharedCountClass,
    contentClass:
        "content z-4 absolute p-6 bottom-5 text-[#dddddd] gap-1 flex flex-col",
    titleClass: "text-[3vw]",
    descClass: "text-2xl",
    imageClass: sharedImageClass,
    overlayClass: "bg-gradient absolute top-0 left-0 h-[100%] w-[100%]",
};

const card3Styles = {
    containerClass: "relative gap-1 overflow-hidden aa bg-[#060709] rounded-2xl",
    countClass: sharedCountClass,
    contentClass:
        "content z-4 absolute p-6 bottom-0 text-[#dddddd] gap-1 flex flex-col",
    titleClass: "text-[3vw]",
    descClass: "text-[1.3vw]",
    imageClass: sharedImageClass,
    overlayClass: "bg-gradient absolute top-0 left-0 h-[100%] w-[100%]",
};

const card4Styles = {
    containerClass: "relative gap-1 overflow-hidden aa bg-[#060709] rounded-2xl",
    countClass: sharedCountClass,
    contentClass:
        "content z-4 absolute p-6 bottom-0 text-[#dddddd] gap-1 flex flex-col",
    titleClass: "text-[3vw] whitespace-nowrap",
    descClass: "text-[1.3vw]",
    imageClass: sharedImageClass,
    overlayClass: "bg-gradient absolute top-0 left-0 h-[100%] w-[100%]",
};

const Servieses = () => {
    useEffect(() => {
        const ctv = gsap.context(() => {
            gsap.from(".card-wrapper", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".services",
                    start: "top 50%",
                },
            });

            gsap.from(".word", {
                scrollTrigger: {
                    trigger: ".services",
                    start: "top 50%",
                },
            });
        });

        return () => ctv.revert();
    }, []);

    return (
        <div className="services h-[105vh] relative w-full flex justify-between items-center p-10">
            <BlurText
                text="Our Services"
                delay={150}
                animateBy="words"
                direction="top"
                className=" word absolute left-25 top-5 text-[5vw]"
            />

            <div className="left mt-25 z-2 w-[50vw] h-screen flex items-center justify-center pl-4">
                <div className="card-wrapper">
                    <Serviese_card
                        img={cardimg}
                        count="01"
                        height="80vh"
                        width="35vw"
                        text="Portfolio Website"
                        description="Showcase your work beautifully with sleek, modern portfolio designs."
                        {...card1Styles}
                    />
                </div>
            </div>

            <div className="right mt-25 z-2">
                <div className="mr-4 h-[50%] flex items-center justify-center">
                    <div className="card-wrapper">
                        <Serviese_card
                            img={card2}
                            count="02"
                            height="39vh"
                            width="51vw"
                            text="Landing Page"
                            description="Drive conversions fast with focused, high-impact landing page design."
                            {...card2Styles}
                        />
                    </div>
                </div>

                <div className="flex gap-4 mt-4 mr-5">
                    <div className="card-wrapper">
                        <Serviese_card
                            img={card3}
                            count="03"
                            height="39vh"
                            width="25vw"
                            text="Single Page"
                            description="Compact, elegant one-pagers optimized for speed and clear messaging."
                            {...card3Styles}
                        />
                    </div>
                    <div className="card-wrapper">
                        <Serviese_card
                            img={card6}
                            count="04"
                            height="39vh"
                            width="25vw"
                            text="Business Website"
                            description="Professional, scalable websites built for growth and strong branding."
                            {...card4Styles}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Servieses;
