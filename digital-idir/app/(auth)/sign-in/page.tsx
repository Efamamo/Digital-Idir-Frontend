'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import CustomForm from '@/components/ui/CustomForm';
import { signInFormSchema } from '@/lib/utils';
import Image from 'next/image';
import Devider from '@/components/ui/Devider';
import Link from 'next/link';
import SignInField from '@/components/ui/SignInField';

export function SignIn() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    console.log(values);
  }

  return (
    <section className="mt-40">
      <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
      <div className="max-w-lg mx-auto">
        <Button className="w-full my-4 bg-white text-black hover:text-white border-gray-500 border rounded-md">
          <Image src="/assets/google.svg" alt="google" width={20} height={20} />
          Sign In With Gogle
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
            />

            <SignInField
              name="password"
              type="password"
              label="Password"
              control={form.control}
              placeholder="Enter Your Password"
            />

            <Button
              className="w-full block mt-4 bg-blue-600 text-white text-base font-semibold hover:bg-blue-600"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Form>
        <div className="flex gap-1 justify-center mt-2">
          <h3>Don't have an account?</h3>
          <Link href="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
