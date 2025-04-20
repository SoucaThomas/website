'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Github, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the form errors type
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast({
        title: 'Form validation failed',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      // Check if environment variables are defined
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is not properly set in environment variables');
      }

      // Create template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send email using EmailJS - don't pass the public key here since we already initialized it
      await emailjs.send(serviceId, templateId, templateParams);

      // Handle success
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Failed to send message',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={formErrors.name ? 'border-destructive' : ''}
                  />
                  {formErrors.name && <p className="text-sm text-destructive">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={formErrors.email ? 'border-destructive' : ''}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-destructive">{formErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className={formErrors.subject ? 'border-destructive' : ''}
                  />
                  {formErrors.subject && (
                    <p className="text-sm text-destructive">{formErrors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className={`min-h-[120px] ${formErrors.message ? 'border-destructive' : ''}`}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-destructive">{formErrors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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
