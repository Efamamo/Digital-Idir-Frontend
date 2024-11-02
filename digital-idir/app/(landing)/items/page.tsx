'use client';
import Product from '@/components/ui/Product';
import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';

import Cart from '@/components/ui/Cart';
import { addItem, initItems, store } from '@/store/store';
import Image from 'next/image';

function page() {
  return (
    <Provider store={store}>
      <Items />
    </Provider>
  );
}

function Items() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('http://localhost:5000/api/v1/items/');
      const data = await response.json();
      const items: any = data.map((item: any) => ({
        id: item._id,
        name: item.name,
        image: 'http://localhost:500' + item.imageURL,
        amount: item.amount,
        price: item.price,
        isAdded: false,
      }));

      dispatch(initItems({ items: items }));
    }

    fetchItems();
  }, []); // Dependency array includes items to track changes

  const items = useSelector((state: any) => state.items.items);
  return (
    <div className=" text-white md:mx-40 pt-24 px-5 md:px-0 min-h-screen">
      <div className="flex justify-between">
        <div></div>
        <h2 className="text-white font-bold text-4xl text-center pt-10">
          Discover our Products
        </h2>

        <Cart />
      </div>
      {items.length == 0 && (
        <div className="flex gap-2 flex-col mt-40 justify-center items-center text-xl">
          <Image
            src="/assets/empty.webp"
            alt="no items"
            width={300}
            height={300}
          />

          <h3 className="font-semibold">No Items Available</h3>
        </div>
      )}

      <div className="flex gap-20 flex-wrap py-14 justify-center items-center">
        {items.map((item: any) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            image={item.image}
            isAdded={item.isAdded}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
