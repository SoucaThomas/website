'use client';

import type React from 'react';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This would be replaced with actual form submission logic
    // For example, using EmailJS or Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <Section>
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle mx-auto text-center">
        Get in touch with me for collaborations or opportunities
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Alternative ways to reach out to me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Link href="mailto:thomassouca@gmail.com" className="hover:underline">
                      thomassouca@gmail.com
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Link href="mailto:thomas@souca.dev" className="hover:underline">
                      thomas@souca.dev
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Github className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Link
                      href="https://github.com/SoucaThomas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/SoucaThomas
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Whether you have a question about my work, want to discuss a potential
                collaboration, or just want to say hello, I'll try my best to get back to you as
                soon as possible.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
