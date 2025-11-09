import React from "react";
import { type className } from "../interface";

export const NameSVG: React.FC<className> = ({ className }) => {
    return (
        <svg
            className={`block ${className}`}
            viewBox="0 0 150 150"
        >
            <text
                className="animate-text momo-signature svg-text-middle sm:text-[50px] text-5xl"
                x="50%"
                y="50%"
            >
                Sameer Gururaj Mathad
            </text>
            <text
                className="momo-signature svg-text-middle sm:text-[50px] text-5xl fill-white stroke-0"
                style={{ fillOpacity: 0.1 }}
                x="50%"
                y="50%"
            >
                Sameer Gururaj Mathad
            </text>
        </svg>
    );
};
