import React from 'react';
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
  let total = 0;
  for (const item of cart) {
    total += item.amount * item.price;
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
                  key={item.name}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>

            <div className="flex flex-col items-center text-black gap-2">
              <h3 className="text-lg font-bold">Total : {total} Birr</h3>
              <button
                className={`bg-blue-600 text-white px-3 md:px-6 py-1 text-center md:py-2 rounded-full max-w-40 block mx-auto text-base font-semibold ${
                  total === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-200'
                }`}
                disabled={total === 0}
              >
                Rent
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
