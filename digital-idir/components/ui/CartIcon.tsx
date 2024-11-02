import { decreament, increament, removeFromCart } from '@/store/store';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IconProps {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}
function CartIcon({ id, name, price, image, amount }: IconProps) {
  function toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  const dispatch = useDispatch();
  return (
    <div className="flex relative justify-between items-start border-b border-gray-500 text-black pb-2">
      <div className="flex items-start gap-6">
        <div className="relative">
          <Image
            src={image}
            alt="product image"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <h3 className="font-semibold text-sm">{toTitleCase(name)}</h3>
      </div>
      <div className="flex flex-col gap-1.5 items-center">
        <p className="text-sm font-semibold">{amount * price} Birr</p>
        <div className="flex justify-between py-1 px-3 gap-3 rounded-full border border-gray-700 text-base font-semibold">
          <Image
            src="/assets/minus.svg"
            alt="product image"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => {
              dispatch(decreament({ id: id }));
            }}
          />{' '}
          <p className="text-sm">{amount}</p>
          <Image
            src="/assets/add.svg"
            alt="product image"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => {
              dispatch(increament({ id: id }));
            }}
          />
        </div>
      </div>
      <Image
        src="/assets/cancel.svg"
        alt="cancel"
        width={15}
        height={15}
        className=" text-black cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ id: id }));
        }}
      />
    </div>
  );
}

export default CartIcon;
