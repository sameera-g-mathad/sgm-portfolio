import React from "react";
import { type className } from "../interface";

export interface rotatingTextInterface {
    rotatingText: string;
    textOffset: number;
    rotation: 'clock' | 'anti';
    duration: string;
    repeatCount: string;
}
export const RotatingTextSVG: React.FC<className & rotatingTextInterface> = ({ className, duration, repeatCount, rotation, rotatingText, textOffset }) => {
    const rotatingId = 'rotating-circle' + rotatingText
    return <svg className={`${className}`} viewBox="0 0 200 200" >
        <g id={rotatingId}>
            <path id='circle' className="stroke-2 fill-transparent " d='M 5,100 A 95,95 1 1,0 195,100 A 95,95 1 1,0 5,100' pathLength={1} />
            <path id='rotating-path' style={{ animationDirection: rotation === 'clock' ? 'reverse' : 'forwards' }} className="animate-rotating-path stroke-2 stroke-white fill-none" d='M 5,100 A 95,95 1 1,0 195,100 A 95,95 1 1,0 5,100' pathLength={1} />
            <path id='rotating-path' style={{ animationDirection: rotation === 'clock' ? 'reverse' : 'forwards' }} className="animate-rotating-path stroke-2 stroke-white fill-none" d='M 40,100 A 60,60 1 1,0 160,100 A 60,60 1 1,0 40,100' pathLength={1} />

            <text className="uppercase stroke-white fill-white">
                <textPath startOffset={textOffset} href="#circle">
                    <tspan dy={-5}>{rotatingText}</tspan>
                </textPath>
            </text>
            {
                rotation === 'clock' ?
                    <animateTransform
                        attributeName="transform"
                        type='rotate'
                        from='0 100 100'
                        to='360 100 100'
                        dur={duration}
                        begin={0.6}
                        repeatCount={repeatCount}
                    /> : <animateTransform
                        attributeName="transform"
                        type='rotate'
                        from='360 100 100'
                        to='0 100 100'
                        dur={duration}
                        begin={0.6}
                        repeatCount={repeatCount}
                    />
            }
        </g>
    </svg>
};
