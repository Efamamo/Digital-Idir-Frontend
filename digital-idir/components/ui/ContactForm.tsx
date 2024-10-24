'use client';
import React, { useState } from 'react';
import { Form } from './form';
import { contactFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import ContactField from './ContactField';
import Image from 'next/image';
import Message from './Message';

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {}
  return (
    <div className="flex-1 max-w-lg bg-[#1F1F22] p-8 shadow-lg rounded-lg">
      <h3 className="text-2xl md:text-3xl font-semibold">Get in Touch</h3>
      <p>You can reach us anytime</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 ">
          <div className="flex gap-3">
            <div className="flex-1">
              <ContactField
                name="firstName"
                type="text"
                control={form.control}
                placeholder="First name"
              />
            </div>
            <div className="flex-1">
              <ContactField
                name="lastName"
                type="text"
                control={form.control}
                placeholder="Last name"
              />
            </div>
          </div>

          <ContactField
            name="email"
            type="email"
            control={form.control}
            placeholder="Email"
          />

          <ContactField
            name="phoneNumber"
            type="tel"
            control={form.control}
            placeholder="Phone Number"
          />
          <Message name="message" control={form.control} />

          <Button
            className="w-full block mt-4 bg-blue-600 hover:bg-blue-700 rounded-full"
            type="submit"
          >
            {!isLoading ? (
              <p className="text-base font-semibold">Submit</p>
            ) : (
              <Image
                src="/assets/loading.svg"
                alt="loading"
                width={30}
                height={30}
                className="mx-auto"
              />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
