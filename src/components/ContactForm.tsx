'use client';
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Image from 'next/image';
import { toast } from 'sonner';
import { Spinner } from './ui/spinner';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("manzzjlk");
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thanks for reaching out!', {
        description: "I'll get back to you soon.",
      });
      // Reset form after successful submission
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="templates container max-w-6xl py-16 px-4">
      <h2 className="text-left text-3xl font-medium mb-12">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/contact-illustration.svg"
              alt="Contact us illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto md:mx-0">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={5}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button type="submit" disabled={state.submitting} className="w-full">
            Submit
            {state.submitting ? <Spinner /> : <Send className="ml-2 size-4" />}
          </Button>
        </form>
      </div>
    </section>
  );
}
