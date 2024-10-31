'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomForm from '@/components/ui/CustomForm';
import { signUpFormSchema } from '@/lib/utils';
import Image from 'next/image';
import Devider from '@/components/ui/Devider';
import Link from 'next/link';
import { useReducer, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

export function SignUp() {
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    setEmailError('');
    setPhoneNumberError('');
    const body = new FormData();
    body.append('username', values.username);
    body.append('email', values.email);
    body.append('password', values.password);
    body.append('phoneNumber', values.phoneNumber);
    setIsLoading(true);
    const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
      method: 'POST',
      body,
    });
    setIsLoading(false);

    if (response.status !== 201) {
      const data = await response.json();
      if (data.error.includes('email')) {
        setEmailError(data.error);
      }

      if (data.error.includes('phoneNumber')) {
        setPhoneNumberError(data.error);
      }
    } else {
      router.push('/verify');
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      <div className="max-w-2xl mx-5 md:mx-auto p-6 shadow-xl flex-1 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
        <div className="max-w-lg mx-5 md:mx-auto">
          <Button
            className="w-full my-4 bg-white text-black  hover:bg-gray-400 border rounded-md"
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
            <p className="text-base font-semibold">Sign Up With Gogle</p>
          </Button>
          <Devider />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CustomForm
                name="username"
                type="text"
                label="Username"
                control={form.control}
                placeholder="Enter Your Username"
                error={usernameError}
              />
              <CustomForm
                name="email"
                type="email"
                label="Email"
                control={form.control}
                placeholder="Enter Your Email"
                error={emailError}
              />
              <CustomForm
                name="phoneNumber"
                type="phone"
                label="Phone Number"
                control={form.control}
                placeholder="Enter Your Phone Number"
                error={phoneNumberError}
              />
              <CustomForm
                name="password"
                type="password"
                label="Password"
                control={form.control}
                placeholder="Enter Your Password"
                error={passwordError}
              />

              <CustomForm
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                control={form.control}
                placeholder="Enter Your Password Again"
              />

              <Button
                className="w-full block mt-4 bg-blue-600 hover:bg-blue-700"
                type="submit"
              >
                {!isLoading ? (
                  <p className="text-base font-semibold">Sign Up</p>
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
            <h3>Already have an account?</h3>
            <Link href="/sign-in" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
