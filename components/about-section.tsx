"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div ref={ref} className="space-y-6">
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello! I'm Souca Thomas, a passionate full-stack developer with
            expertise in building modern web applications. I specialize in
            creating responsive, performant, and user-friendly applications that
            solve real-world problems.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My focus is on clean architecture and seamless user experiences.
            With Next.js on the frontend and Express.js on the backend, I build
            applications that are not only beautiful but also robust and
            maintainable.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm passionate about creating intuitive interfaces that make complex
            tasks simple. My approach combines technical expertise with a keen
            eye for design, ensuring that every project I work on is both
            functional and aesthetically pleasing.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            When I'm not coding, I'm constantly learning about new technologies
            and best practices to stay at the forefront of web development. I
            believe in the power of open-source and regularly contribute to the
            developer community through GitHub projects and knowledge sharing.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
