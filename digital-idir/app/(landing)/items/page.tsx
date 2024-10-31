'use client';
import Product from '@/components/ui/Product';
import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';

import Cart from '@/components/ui/Cart';
import { store } from '@/store/store';

function page() {
  return (
    <Provider store={store}>
      <Items />
    </Provider>
  );
}

function Items() {
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

      <div className="flex gap-20 flex-wrap py-14 justify-center items-center">
        {items.map((item: any) => (
          <Product
            key={item.name}
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
