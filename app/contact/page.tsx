'use client';

import type React from 'react';

import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="container max-w-4xl py-12 md:py-24">
      <AnimatedSection className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Contact</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with me for collaborations or opportunities
        </p>
      </AnimatedSection>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="space-y-8">
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
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
