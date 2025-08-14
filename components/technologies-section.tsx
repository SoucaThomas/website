'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiAmazon
} from 'react-icons/si';

const technologyCategories = [
    {
        name: 'Frontend',
        technologies: [
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'React', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Framer Motion', icon: SiFramer },
        ]
    },
    {
        name: 'Backend',
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'PostgreSQL', icon: SiPostgresql },
        ]
    },
    {
        name: 'DevOps & Tools',
        technologies: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Git', icon: SiGit },
            { name: 'AWS', icon: SiAmazon },
        ]
    }
];

export function TechnologiesSection() {
    return (
        <Section>
            <div className="relative">
                <h2 className="section-title relative z-10 text-center">Technologies & Skills</h2>
                <p className="section-subtitle max-w-3xl mx-auto text-center relative z-10">
                    A comprehensive toolkit of technologies and frameworks I use to build modern applications
                </p>

                <div className="mt-16 space-y-12">
                    {technologyCategories.map((category, categoryIndex) => (
                        <TechnologyCategory
                            key={category.name}
                            category={category}
                            index={categoryIndex}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted-foreground mb-4">
                            Always learning and expanding my skill set
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Badge variant="outline" className="px-3 py-1">
                                Continuous Learning
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1">
                                Industry Best Practices
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1">
                                Performance Focus
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

function TechnologyCategory({ category, index }: { category: any; index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: index * 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={containerRef}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-6"
        >
            <motion.h3
                variants={item}
                className="text-2xl font-semibold text-center text-foreground"
            >
                {category.name}
            </motion.h3>

            <motion.div
                variants={container}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
            >
                {category.technologies.map((tech: any) => (
                    <TechnologyCard key={tech.name} technology={tech} />
                ))}
            </motion.div>
        </motion.div>
    );
}

function TechnologyCard({ technology }: { technology: { name: string; icon: any } }) {
    // Handle technologies without icons
    if (!technology.icon) {
        return (
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                        <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-muted-foreground">
                                {technology.name.charAt(0)}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {technology.name}
                            </h4>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    const IconComponent = technology.icon;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                    <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-16 h-16 text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {technology.name}
                        </h4>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
