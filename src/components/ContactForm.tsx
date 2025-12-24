'use client';
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
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
    <section id="contact-form" className="templates container max-w-6xl py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Main form card */}
        <div className="relative backdrop-blur-sm bg-card/50 border border-border/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-bl-full blur-2xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-tr-full blur-2xl -z-10" />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email in a grid on larger screens */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="transition-all duration-300 focus:scale-[1.02]"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="transition-all duration-300 focus:scale-[1.02]"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hi..."
                rows={6}
                className="transition-all duration-300 focus:scale-[1.01] resize-none"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit button with gradient */}
            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {state.submitting ? (
                <>
                  <Spinner className="mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 size-4" />
                </>
              )}
            </Button>
          </form>

          {/* Contact info or social links could go here */}
          <div className="mt-8 pt-8 border-t border-border/20">
            <p className="text-center text-sm text-muted-foreground">
              Prefer email? Reach me directly at{' '}
              <a href="mailto:vhuy2571990@gmail.com" className="text-primary hover:underline font-medium">
                vhuy2571990@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
