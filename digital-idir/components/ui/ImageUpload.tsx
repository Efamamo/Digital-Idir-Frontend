'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './input';
import Image from 'next/image';
import { useRef } from 'react';

function ImageUpload() {
  const imageRef = useRef<HTMLInputElement | null>(null);
  function pickImage() {
    imageRef.current?.click();
  }

  return (
    <>
      <FormField
        name={'image'}
        render={({ field, fieldState }) => (
          <FormItem className="hidden">
            <FormControl>
              <Input type="file" />
            </FormControl>
            {fieldState.error && (
              <FormMessage className="text-red-600 text-sm">
                {fieldState.error.message}
              </FormMessage>
            )}
          </FormItem>
        )}
      />

      <div className="my-8">
        <h2 className="text-xl font-bold text-center">Upload Your Image</h2>
        <h3 className="text-center">PNG, JPG AND JPEG files are allowed</h3>

        <div
          className="flex flex-col items-center p-8 m-4 rounded-sm border border-dashed border-black"
          onClick={pickImage}
        >
          <Image
            src="/assets/upload.svg"
            alt="upload image"
            width={70}
            height={70}
            className="cursor-pointer"
          />
          <p>Drag and drop or browse to choose a file</p>
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
