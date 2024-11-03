'use client';
import React, { useRef, useState } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '@/store/store';
import { Button } from './button';
import { useForm } from 'react-hook-form';
import { rentFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import RentField from './RentField';

function Cart() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const cart = useSelector((state: any) => state.items.cart);
  let total = 0;
  for (const item of cart) {
    total += item.amount * item.price;
  }

  const form = useForm<z.infer<typeof rentFormSchema>>({
    resolver: zodResolver(rentFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof rentFormSchema>) {
    setIsLoading(true);
    const email = values.email;
    const phoneNumber = values.phoneNumber;
    const items = cart.map((item: any) => ({
      id: item.id,
      amount: item.amount,
    }));

    const body = {
      items: items,
      email: email,
      phoneNumber: phoneNumber,
    };

    try {
      const response = await fetch(
        'http://localhost:5000/api/v1/items/order-rent/',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );
      setIsLoading(false);

      if (response.ok) {
        dispatch(clear());
        const result = await response.json();
        window.open(result, '_blank'); // Opens the URL in a new window or tab
      }
    } catch (error) {
      setIsLoading(false);

      console.error('Error placing order:', error);
    }
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/assets/cart.svg" alt="cart" width={20} height={20} />
      </SheetTrigger>
      <SheetContent className="pt-14 bg-gray-200 border-none w-full overflow-scroll">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between items-end mb-6">
              <h3
                className="text-3xl font-bold"
                style={{
                  fontFamily: "'Oleo Script', cursive",
                }}
              >
                My Cart
              </h3>

              {total > 0 && (
                <button
                  title="Clear Cart"
                  onClick={() => {
                    dispatch(clear());
                  }}
                  className="text-sm"
                >
                  <Image
                    src="/assets/eraser.svg"
                    alt="clear"
                    width={23}
                    height={23}
                  />
                </button>
              )}
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col justify-between h-screen pb-40">
            <div className="flex flex-col gap-8 pt-6">
              {cart.length === 0 && (
                <p className="text-black text-center font-semibold text-lg">
                  No item in the cart
                </p>
              )}
              {cart.map((item: any) => (
                <CartIcon
                  id={item.id}
                  key={item.name}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>

            {total > 0 && (
              <div className="flex flex-col text-black gap-2 mt-10">
                <h3 className="text-lg font-bold">Total : {total} Birr</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <RentField
                      name="email"
                      placeholder="Enter your email"
                      control={form.control}
                      label="Email"
                      type="email"
                      error=""
                    />
                    <RentField
                      name="phoneNumber"
                      placeholder="Enter your Phone Number"
                      control={form.control}
                      label="Phone Number"
                      type="tel"
                      error=""
                    />

                    <Button
                      className={`bg-blue-600 w-full text-white px-3 md:px-6 py-1 text-center md:py-2 rounded-lg  block mx-auto text-base font-semibold ${
                        total === 0
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-blue-800'
                      }`}
                      disabled={total === 0}
                    >
                      {' '}
                      {!isLoading ? (
                        <p className="text-base font-semibold">
                          Continue With Chapa
                        </p>
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
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
