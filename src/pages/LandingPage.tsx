import { useEffect, useMemo, useRef } from "react";
import { GithubSVG, LinkedInSVG, NameSVG, RotatingTextSVG } from "../svgs";



export const LandingPage = () => {
    const memosizedColors = useMemo(() => {
        return [
            `linear-gradient(
            to top right,
            #0a0a0a,
            #141414,
            #1f1f1f,
            #292929,
            #333333
            )`,
            `linear-gradient(
            to top right,
            #0b2c24,
            #0f392b,
            #134632,
            #185339,
            #1c603f
            )`,
        ]
    }, [])

    const pageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const randomColor = memosizedColors[Math.floor(Math.random() * memosizedColors.length)]
        if (pageRef && pageRef.current) {
            pageRef.current.style.background = randomColor
        }
    }, [])


    return <div ref={pageRef} className="w-full min-h-screen flex justify-evenly">
        <div className="w-full h-full absolute bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_98%,transparent_100%)]"></div>
        <div className="sm:w-[50%] w-full flex flex-col justify-center items-start">
            <NameSVG className="w-full sm:h-[100px] h-20 stroke-white fill-white" />
            <div className="w-full flex justify-center items-center">
                <a className="pointer-fine z-10" href="https://www.linkedin.com/in/sameer-gururaj-mathad/" target="_blank">
                    <LinkedInSVG className="stroke-white fill-white w-10 h-10 px-1 stroke-0" />
                </a>

                <a className="pointer-fine z-10" href="https://github.com/sameera-g-mathad" target="_blank">
                    <GithubSVG className="stroke-white fill-white w-10 h-10 px-1" />
                </a>

            </div>
        </div>
        <div className="sm:block hidden w-[50%] relative">
            <div className="w-64 h-64 rounded absolute top-[36%] left-[5%] -translate-y-1/2 bg-[linear-gradient(to_right,white_1px,transparent_1px)] bg-size-[20px_20px] opacity-30" />
            <div className="w-64 h-64 rounded absolute top-[72%] left-[60%] -translate-y-1/2 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[10px_10px]" />
            <div className="w-90 h-40 rounded absolute top-[78%] left-[5%] -translate-y-1/2 bg-[linear-gradient(to_top,white_1px,transparent_1px)] bg-size-[20px_20px] opacity-30" />
            <div className="w-50 h-50 rounded absolute top-[30%] left-[65%] -translate-y-1/2 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[10px_10px]" />

            <RotatingTextSVG
                className="w-72 h-72 absolute z-5 top-[45%] left-[40%] -translate-y-1/2 text-[36px] tracking-[4px]"
                duration="7s"
                key="Artificial Intelligence"
                repeatCount="indefinite"
                rotation="clock"
                rotatingText="Artificial  •  Intelligence •"
                textOffset={0} />
            <RotatingTextSVG
                className="w-40 h-40 absolute z-5 top-[55%] left-[20%] -translate-y-1/2 text-[35px] tracking-[9px]"
                duration="20s"
                key="Software Engineer"
                repeatCount="indefinite"
                rotation="anti"
                rotatingText="Software • Engineer •"
                textOffset={0}
            />
            <RotatingTextSVG
                className="w-35 h-35 absolute z-5 top-[70%] left-[35%] -translate-y-1/2 text-[26px] tracking-[9px]"
                duration="15s"
                key="Full Stack"
                repeatCount="indefinite"
                rotation="anti"
                rotatingText="Full • Stack • Developer •"
                textOffset={0}
            />
        </div>
        <div className="absolute w-full h-full sm:block hidden">
            <svg className="relative w-full h-full " viewBox="0 0 200 200">
                <defs>
                    <linearGradient id='white' x1='0%' x2='0%' y1='100%' y2='0%' gradientUnits="userSpaceOnUse">
                        <stop offset='0%' stopColor="white" stopOpacity='1'> </stop>
                        <stop offset='90%' stopColor="transparent" stopOpacity='1'></stop>
                    </linearGradient>

                </defs>

                <line className="animate-line" stroke={"url(#white)"} x1='100' x2='100' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='40' x2='70' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='-40' x2='40' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='-100' x2='0' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='160' x2='130' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='240' x2='160' y1='200' y2='0' pathLength={1} />
                <line className="animate-line" stroke={"url(#white)"} x1='300' x2='200' y1='200' y2='0' pathLength={1} />
            </svg>

        </div>
    </div>
};

