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
import { Textarea } from './textarea';

interface FormInterface {
  control: Control<z.infer<typeof contactFormSchema>>;
  name: FieldPath<z.infer<typeof contactFormSchema>>;
  error?: string;
}

function Message({ name, control, error }: FormInterface) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="mb-4">
          <FormControl>
            <Textarea rows={5} placeholder="How can we help?" {...field} />
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

export default Message;
