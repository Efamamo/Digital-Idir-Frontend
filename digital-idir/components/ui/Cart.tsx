'use client';
import React, { useRef, useState } from 'react';
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

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.items.cart);
  const emailRef = useRef<any>();
  const phoneRef = useRef<any>();

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  let total = 0;
  for (const item of cart) {
    total += item.amount * item.price;
  }

  async function handleRent(e: any) {
    e.preventDefault();
    const email = emailRef.current.value;
    const phoneNumber = phoneRef.current.value;

    if (!email) {
      setEmailError('Email is invalid');
      return;
    }

    if (!phoneNumber) {
      setPhoneError('Phone Number is invalid');
      return;
    }

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

      if (response.ok) {
        dispatch(clear());
        const result = await response.json();
        window.open(result, '_blank'); // Opens the URL in a new window or tab
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/assets/cart.svg" alt="cart" width={20} height={20} />
      </SheetTrigger>
      <SheetContent className="pt-14 bg-gray-400 border-none">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between items-end mb-4">
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
                    src="/assets/eraser.png"
                    alt="clear"
                    width={23}
                    height={23}
                  />
                </button>
              )}
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col justify-between h-screen pb-40">
            <div className="flex flex-col gap-6 pt-6">
              {cart.length === 0 && (
                <p className="text-black text-center font-semibold">
                  No items in the cart
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
              <div className="flex flex-col text-black gap-2">
                <h3 className="text-lg font-bold">Total : {total} Birr</h3>
                <form onSubmit={handleRent}>
                  <div>
                    <label className="text-base text-gray-700">
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      ref={emailRef}
                      className="w-full focus-visible:ring-0 focus:border-gray-500 text-black bg-gray-200 p-2 mb-4 rounded-lg"
                    />
                    {emailError && (
                      <p className="text-sm text-red-600">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-base text-gray-700">
                      Enter Your Phone Number
                    </label>
                    <input
                      type="text"
                      ref={phoneRef}
                      className="w-full focus-visible:ring-0 focus:border-gray-500 text-black bg-gray-200 p-2 mb-4 rounded-lg"
                    />
                    {phoneError && (
                      <p className="text-sm text-red-600">{phoneError}</p>
                    )}
                  </div>

                  <button
                    className={`bg-blue-600 w-full text-white px-3 md:px-6 py-1 text-center md:py-2 rounded-lg  block mx-auto text-base font-semibold ${
                      total === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-800'
                    }`}
                    disabled={total === 0}
                  >
                    Rent
                  </button>
                </form>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
