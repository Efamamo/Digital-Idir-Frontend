import React from 'react';
import { z } from 'zod';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { contactFormSchema, signInFormSchema } from '@/lib/utils';

interface FormInterface {
  control: Control<z.infer<typeof contactFormSchema>>;
  name: FieldPath<z.infer<typeof contactFormSchema>>;
  type: string;
  placeholder: string;
  error?: string;
}

function ContactField({
  name,
  control,
  type,
  placeholder,
  error,
}: FormInterface) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="mb-4">
          <FormControl>
            <Input
              className="w-full focus-visible:ring-0 focus:border-gray-500 text-black bg-gray-200"
              placeholder={placeholder}
              type={type}
              {...field}
            />
          </FormControl>
          {fieldState.error && (
            <FormMessage className="text-red-600 text-sm">
              {fieldState.error.message}
            </FormMessage>
          )}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </FormItem>
      )}
    />
  );
}

export default ContactField;
