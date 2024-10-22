import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const signUpFormSchema = z
  .object({
    username: z
      .string({ message: 'Username is Required' })
      .min(2, { message: 'Minimum length of username is 2' })
      .max(50),
    email: z
      .string({ message: 'Email is Required' })
      .email({ message: 'Invalid email format' }),
    phoneNumber: z
      .string({ message: 'Phone Number is Required' })
      .regex(/^[0-9]{10}$/, {
        message: 'Invalid phone number. Must be 10 digits.',
      }),
    password: z
      .string({ message: 'Password is Required' })
      .min(6, { message: 'Minimum password length is 6' }),
    confirmPassword: z.string({ message: 'Confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const signInFormSchema = z.object({
  email: z
    .string({ message: 'Email is Required' })
    .email({ message: 'Invalid Email format' }),

  password: z.string({ message: 'Password is Required' }),
});
