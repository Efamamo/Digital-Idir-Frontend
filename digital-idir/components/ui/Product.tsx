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

  return (
    <div className="max-w-max flex-grow-0 p-6 bg-[#101012] rounded-lg pb-3">
      <Image
        src={image}
        alt="product image"
        width={300}
        height={300}
        className="rounded-sm"
      />
      <h3 className="text-center mt-2 text-lg font-semibold">{name}</h3>
      <div className="flex justify-center gap-16 my-1">
        <p>Amount: {amount}</p>
        <p>
          Price: <span className="font-bold">{price}</span> Birr
        </p>
      </div>
      <button
        onClick={() => {
          if (!isAdded) {
            dispatch(addToCart({ id }));
          }
        }}
        className={`bg-white text-black px-3 md:px-6 py-1 text-center md:py-2 rounded-full max-w-40 block mx-auto text-base font-semibold mt-4 ${
          isAdded ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
        disabled={isAdded}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Product;
