'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Spinner } from './ui/spinner';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const contactChannels = [
  {
    label: 'Email',
    value: 'vhuy2571990@gmail.com',
    href: 'mailto:vhuy2571990@gmail.com',
    icon: 'material-symbols-light:alternate-email',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/huy-nguyen',
    href: 'https://www.linkedin.com/in/huy-nguyen-3b67b0173/',
    icon: 'iconoir:linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/vhuy257',
    href: 'https://github.com/vhuy257',
    icon: 'mdi:github',
  },
];

const fieldClass = cn(
  'peer w-full bg-transparent border-0 border-b border-border/80 rounded-none px-0 py-3',
  'text-base md:text-sm text-foreground placeholder:text-muted-foreground/70',
  'outline-none transition-[border-color,box-shadow] duration-200',
  'focus:border-blue-500 focus:ring-0',
  'disabled:cursor-not-allowed disabled:opacity-50'
);

export default function ContactForm() {
  const [state, handleSubmit] = useForm('manzzjlk');
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thanks for reaching out!', {
        description: "I'll get back to you soon.",
      });
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="container max-w-6xl py-16 px-4 scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30 dark:bg-muted/15">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-blue-500"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-16 size-64 rounded-full bg-sky-400/10 blur-3xl"
        />

        <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Let&apos;s connect
              </h2>
              <p className="mt-4 max-w-sm text-muted-foreground leading-relaxed">
                Have a project in mind or just want to chat? Drop a note and I will reply as soon as I can.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Reach me directly
              </p>
              <ul className="space-y-4">
                {contactChannels.map((channel) => (
                  <li key={channel.label}>
                    <Link
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        channel.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-blue-500"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition-colors group-hover:border-blue-500 group-hover:text-blue-500">
                        <Icon icon={channel.icon} width={18} height={18} />
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="font-medium underline-offset-4 group-hover:underline">
                          {channel.value}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-7 rounded-xl bg-background/80 p-5 backdrop-blur-sm md:p-7 dark:bg-background/50"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={fieldClass}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your idea..."
                rows={5}
                className={cn(fieldClass, 'min-h-[120px] resize-none')}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
              <p className="text-xs text-muted-foreground order-2 sm:order-1">
                Usually replies within a day.
              </p>
              <Button
                type="submit"
                disabled={state.submitting}
                className="order-1 sm:order-2 h-11 min-w-[160px] rounded-full px-6 text-sm font-medium"
              >
                {state.submitting ? (
                  <>
                    <Spinner className="mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Icon icon="mdi:arrow-right" width={18} height={18} />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
