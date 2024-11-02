import { addToCart } from '@/store/store';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ProductProps {
  id: string;
  name: string;
  amount: number;
  price: number;
  image: string;
  isAdded: boolean;
}

function Product({ id, isAdded, name, amount, price, image }: ProductProps) {
  const dispatch = useDispatch();

  function toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className="max-w-max flex-grow-0 p-6 bg-[#101012] rounded-lg pb-3">
      <Image
        src={image}
        alt="product image"
        width={300}
        height={300}
        className="rounded-sm"
      />
      <h3 className="text-center mt-2 text-lg font-semibold">
        {toTitleCase(name)}
      </h3>
      <div className="flex justify-between items-center my-2">
        <p>Amount: {amount}</p>
        <p>
          Price: <span className="font-bold">{price}</span> Birr
        </p>
        {isAdded ? (
          <p className="text-gray-400">Added</p>
        ) : (
          <div
            className="bg-white px-2 py-1 rounded-sm cursor-pointer"
            onClick={() => {
              if (!isAdded) {
                dispatch(addToCart({ id }));
              }
            }}
          >
            <Image src="/assets/add.svg" alt="add" width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
