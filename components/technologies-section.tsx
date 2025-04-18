"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PatternBackground } from "@/components/pattern-background";

const technologies = [
  { name: "Next.js", icon: "/placeholder.svg?height=80&width=80" },
  { name: "React", icon: "/placeholder.svg?height=80&width=80" },
  { name: "TypeScript", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Express", icon: "/placeholder.svg?height=80&width=80" },
  { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80" },
  { name: "PostgreSQL", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Tailwind CSS", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Framer Motion", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Docker", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Git", icon: "/placeholder.svg?height=80&width=80" },
  { name: "AWS", icon: "/placeholder.svg?height=80&width=80" },
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
        initial={{ x: "100%" }}
        animate={isInView ? { x: "-100%" } : { x: "100%" }}
        transition={{
          x: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* Double the items to create a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <TechnologyCard key={`${tech.name}-${index}`} technology={tech} />
        ))}
      </motion.div>
    </div>
  );
}

function TechnologyCard({
  technology,
}: {
  technology: { name: string; icon: string };
}) {
  return (
    <Card className="flex-shrink-0 w-[180px] hover:shadow-md transition-shadow duration-300">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="relative w-16 h-16">
          <Image
            src={technology.icon || "/placeholder.svg"}
            alt={technology.name}
            fill
            className="object-contain"
          />
        </div>
        <p className="font-medium text-center">{technology.name}</p>
      </CardContent>
    </Card>
  );
}
