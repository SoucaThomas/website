"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PatternBackground } from "@/components/pattern-background";
import { useTheme } from "next-themes";

const technologies = [
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Express", icon: "/express.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "Framer Motion", icon: "/framermotion.svg" },
    { name: "Docker", icon: "/docker.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "AWS", icon: "/aws.svg" },
];

export function TechnologiesSection() {
    return (
        <Section>
            <div className="relative">
                <PatternBackground variant="subtle" />
                <h2 className="section-title relative z-10">Technologies</h2>
                <p className="section-subtitle mx-auto text-center relative z-10">
                    Tools and technologies I work with
                </p>

                <TechnologyCarousel />
            </div>
        </Section>
    );
}

function TechnologyCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <div ref={containerRef} className="mt-12 overflow-hidden relative z-10">
            <motion.div
                className="flex gap-8 py-4"
                initial={{ x: 0 }}
                animate={isInView ? { x: "-50%" } : { x: 0 }}
                transition={{
                    x: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "linear",
                    },
                }}
            >
                {[...technologies, ...technologies].map((tech, index) => (
                    <TechnologyCard key={`${tech.name}-${index}`} technology={tech} />
                ))}
            </motion.div>
        </div>
    );
}

function TechnologyCard({ technology }: { technology: { name: string; icon: string } }) {
    const { theme } = useTheme();
    const [iconSrc, setIconSrc] = useState(technology.icon);

    useEffect(() => {
        const updatedIconSrc =
            theme === "dark" ? technology.icon.replace(/\.svg$/, "-white.svg") : technology.icon;
        setIconSrc(updatedIconSrc);
    }, [theme, technology.icon]);

    return (
        <Card className="flex-shrink-0 w-[180px] hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="relative w-16 h-16">
                    <Image
                        src={iconSrc}
                        alt={`${technology.name} icon`}
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="font-medium text-center">{technology.name}</p>
            </CardContent>
        </Card>
    );
}
