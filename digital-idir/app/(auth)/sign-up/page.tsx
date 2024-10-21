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
import { signUpFormSchema } from '@/lib/utils';
import Image from 'next/image';
import Devider from '@/components/ui/Devider';
import Link from 'next/link';

export function SignUp() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
  }

  return (
    <section className="mt-20">
      <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
      <div className="max-w-lg mx-auto">
        <Button className="w-full my-4 bg-white text-black hover:text-white border-gray-500 border rounded-md">
          <Image src="/assets/google.svg" alt="google" width={20} height={20} />
          Sign Up With Gogle
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
            />
            <CustomForm
              name="email"
              type="email"
              label="Email"
              control={form.control}
              placeholder="Enter Your Email"
            />
            <CustomForm
              name="phoneNumber"
              type="phone"
              label="Phone Number"
              control={form.control}
              placeholder="Enter Your Phone Number"
            />
            <CustomForm
              name="password"
              type="password"
              label="Password"
              control={form.control}
              placeholder="Enter Your Password"
            />

            <CustomForm
              name="confirmPassword"
              type="password"
              label="ConfirmPassword"
              control={form.control}
              placeholder="Enter Your Password Again"
            />

            <Button
              className="w-full block mt-4 bg-blue-600 text-white text-base font-semibold hover:bg-blue-600"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Form>
        <div className="flex gap-1 justify-center mt-2">
          <h3>Already have an account?</h3>
          <Link href="/sign-in" className="text-blue-600">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
