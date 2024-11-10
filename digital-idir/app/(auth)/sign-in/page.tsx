'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { signInFormSchema } from '@/lib/utils';
import Image from 'next/image';
import Devider from '@/components/ui/Devider';
import Link from 'next/link';
import SignInField from '@/components/ui/SignInField';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [credentialError, setCredentialError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    setCredentialError('');
    setEmailError('');
    setIsLoading(true);
    const response = await fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    setIsLoading(false);

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 401) {
        setCredentialError(data.error);
      }

      if (data.error?.includes('email')) {
        setEmailError(data.error);
      }
      console.log(data);
    } else {
      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      router.push('/dashboard');
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      <div className="max-w-2xl mx-5 md:mx-auto p-6 shadow-xl flex-1 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Sign In</h1>
        <div className="max-w-lg mx-5 md:mx-auto">
          <Button
            className="w-full my-4 bg-white text-black hover:bg-gray-400 border rounded-md"
            onClick={() => {
              window.location.href = 'http://localhost:5000/api/v1/auth/google';
            }}
          >
            {isLoading ? (
              <Image
                src="/assets/loading_black.svg"
                alt="loading"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/google.svg"
                alt="google"
                width={20}
                height={20}
              />
            )}
            <p className="text-base font-semibold">Sign In With Gogle</p>
          </Button>
          <Devider />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <SignInField
                name="email"
                type="email"
                label="Email"
                control={form.control}
                placeholder="Enter Your Email"
                error={emailError}
              />

              <SignInField
                name="password"
                type="password"
                label="Password"
                control={form.control}
                placeholder="Enter Your Password"
              />

              {credentialError && (
                <p className="text-red-600 text-sm">{credentialError}</p>
              )}

              <Button
                className="w-full block mt-4 bg-blue-600 hover:bg-blue-700"
                type="submit"
              >
                {!isLoading ? (
                  <p className="text-base font-semibold">Sign In</p>
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
          <div className="flex gap-1 justify-center mt-3">
            <h3>Don't have an account?</h3>
            <Link href="/sign-up" className="text-blue-600">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
