'use client';

import { useEffect } from 'react';
import { init } from '@emailjs/browser';

export function SetupEmailJS() {
  useEffect(() => {
    // Initialize EmailJS with your public key from environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (publicKey) {
      init(publicKey);
    } else {
      console.error('EmailJS public key is not defined in environment variables');
    }
  }, []);

  return null;
}
