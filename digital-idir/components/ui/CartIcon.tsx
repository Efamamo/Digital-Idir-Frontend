import { decreament, increament, removeFromCart } from '@/store/store';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IconProps {
  image: string;
  name: string;
  price: number;
  amount: number;
}
function CartIcon({ name, price, image, amount }: IconProps) {
  const dispatch = useDispatch();
  return (
    <div className="flex relative justify-between items-start border-b border-gray-500 text-black pb-2">
      <div className="flex items-center gap-6">
        <div className="relative">
          <Image
            src={image}
            alt="product image"
            width={100}
            height={60}
            className="rounded-lg"
          />
        </div>

        <h3 className="font-semibold text-base">{name}</h3>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-base font-semibold">{amount * price} Birr</p>
        <div className="flex justify-between py-1 px-4 gap-3 rounded-full border border-gray-700 text-base font-semibold">
          <Image
            src="/assets/minus.svg"
            alt="product image"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => {
              dispatch(decreament({ name: name }));
            }}
          />{' '}
          <p>{amount}</p>
          <Image
            src="/assets/add.svg"
            alt="product image"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => {
              dispatch(increament({ name: name }));
            }}
          />
        </div>
      </div>
      <Image
        src="/assets/cancel.svg"
        alt="cancel"
        width={15}
        height={15}
        className=" text-white cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ name: name }));
        }}
      />
    </div>
  );
}

export default CartIcon;
