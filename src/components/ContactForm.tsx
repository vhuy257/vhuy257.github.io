'use client';
import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
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
  'focus:border-orange-600 focus:ring-0',
  'disabled:cursor-not-allowed disabled:opacity-50'
);

function ContactReceipt({ onWriteAnother }: { onWriteAnother: () => void }) {
  const headingId = useId();

  return (
    <div
      className="contact-filed flex min-h-[22rem] flex-col justify-center rounded-xl border border-border/50 bg-background/80 p-5 md:p-7 dark:bg-background/50"
      role="status"
      aria-labelledby={headingId}
    >
      <div className="contact-filed__mark mb-5 inline-flex size-11 items-center justify-center rounded-md border border-orange-600/35 bg-orange-600/10 text-orange-600">
        <Icon icon="mdi:check" width={22} height={22} aria-hidden />
      </div>
      <h3
        id={headingId}
        className="contact-filed__title text-2xl font-medium tracking-tight text-foreground"
      >
        Message received
      </h3>
      <p className="contact-filed__body mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Your note is on my desk. I&apos;ll reply within a day — usually sooner.
      </p>
      <div className="contact-filed__actions mt-8 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onWriteAnother}
          className="h-11 rounded-md px-5 text-sm font-medium"
        >
          Write another
        </Button>
        <Link
          href="mailto:vhuy2571990@gmail.com"
          className="text-sm font-medium text-orange-600 underline-offset-4 hover:underline"
        >
          Prefer email?
        </Link>
      </div>
    </div>
  );
}

function ContactFormFields({ onSucceeded }: { onSucceeded: () => void }) {
  const [state, handleSubmit] = useForm('manzzjlk');

  useEffect(() => {
    if (state.succeeded) {
      onSucceeded();
    }
  }, [state.succeeded, onSucceeded]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 rounded-xl border border-border/50 bg-background/80 p-5 md:p-7 dark:bg-background/50"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-xs font-medium text-muted-foreground"
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
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-muted-foreground"
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-medium text-muted-foreground"
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

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="order-2 text-xs text-muted-foreground sm:order-1">
          Usually replies within a day.
        </p>
        <Button
          type="submit"
          disabled={state.submitting}
          className="order-1 h-11 min-w-[160px] rounded-md bg-orange-600 px-6 text-sm font-medium text-white hover:bg-orange-600/90 sm:order-2"
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
  );
}

export default function ContactForm() {
  const [filed, setFiled] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const handleSucceeded = React.useCallback(() => setFiled(true), []);

  return (
    <section id="contact" className="container max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 dark:bg-muted/15">
        <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Let&apos;s connect
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                Have a project in mind or just want to chat? Drop a note and I
                will reply as soon as I can.
              </p>
            </div>

            <div className="space-y-5">
              <ul className="space-y-4">
                {contactChannels.map((channel) => (
                  <li key={channel.label}>
                    <Link
                      href={channel.href}
                      target={
                        channel.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        channel.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-orange-600"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition-colors group-hover:border-orange-600 group-hover:text-orange-600">
                        <Icon icon={channel.icon} width={18} height={18} />
                      </span>
                      <span>
                        <span className="block text-[11px] text-muted-foreground">
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

          {filed ? (
            <ContactReceipt
              onWriteAnother={() => {
                setFiled(false);
                setFormKey((key) => key + 1);
              }}
            />
          ) : (
            <ContactFormFields
              key={formKey}
              onSucceeded={handleSucceeded}
            />
          )}
        </div>
      </div>
    </section>
  );
}
