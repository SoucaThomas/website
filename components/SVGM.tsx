"use client";
import { useTheme } from "next-themes";
import NextDark from "../public/nextjs.svg";
import NextLight from "../public/nextjs-white.svg";
import React from "react";

export interface SVGMProps {
    kind: string;
    className?: string;
}

const ICONS: Record<
    string,
    {
        light: React.FC<React.SVGProps<SVGSVGElement>>;
        dark: React.FC<React.SVGProps<SVGSVGElement>>;
    }
> = {
    next: {
        light: NextDark,
        dark: NextLight,
    },
};

const SVGM: React.FC<SVGMProps> = ({ kind, className }) => {
    const { theme } = useTheme();
    const icon = ICONS[kind];

    if (!icon) return null;

    const IconComponent = theme === "dark" ? icon.dark : icon.light;

    return <IconComponent className={`w-16 h-16 ${className}`} />;
};

export default SVGM;
