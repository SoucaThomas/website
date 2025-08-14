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
import { Github, Mail, Loader2, MessageSquare, Send, MapPin, Calendar } from 'lucide-react';
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
      <div className="text-center mb-16">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Ready to start a conversation? I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`h-11 ${formErrors.name ? 'border-destructive' : 'border-muted-foreground/20'}`}
                    />
                    {formErrors.name && <p className="text-sm text-destructive">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={`h-11 ${formErrors.email ? 'border-destructive' : 'border-muted-foreground/20'}`}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-destructive">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`h-11 ${formErrors.subject ? 'border-destructive' : 'border-muted-foreground/20'}`}
                  />
                  {formErrors.subject && (
                    <p className="text-sm text-destructive">{formErrors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or idea..."
                    className={`min-h-[140px] resize-none ${formErrors.message ? 'border-destructive' : 'border-muted-foreground/20'}`}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-destructive">{formErrors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold rounded-full hover:scale-105 transition-transform duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Quick Contact */}
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Primary Email</p>
                    <Link href="mailto:thomassouca@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      thomassouca@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Business Email</p>
                    <Link href="mailto:thomas@souca.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      thomas@souca.dev
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social & Links */}
          <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                Connect & Collaborate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Link
                  href="https://github.com/SoucaThomas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my projects & contributions</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Availability Status */}
          <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Calendar className="w-5 h-5" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Open to remote work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Interested in collaborations</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
