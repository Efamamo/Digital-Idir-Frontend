// src/features/counter/counterSlice.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { it } from 'node:test';

interface Item {
  name: string;
  image: string;
  amount: number;
  price: number;
  isAdded: boolean;
}

interface ItemsState {
  items: Item[];
  cart: Item[];
}

const initialState: ItemsState = {
  items: [
    {
      name: 'Table',
      amount: 8,
      price: 120,
      image: '/assets/table.jpg',
      isAdded: false,
    },
    {
      name: 'Chair',
      amount: 100,
      price: 60,
      image: '/assets/chair.jpg',
      isAdded: false,
    },
    {
      name: 'Tent',
      amount: 3,
      price: 1000,
      image: '/assets/tent.jpg',
      isAdded: false,
    },
    {
      name: 'Plates',
      amount: 300,
      price: 30,
      image: '/assets/plate.webp',
      isAdded: false,
    },
    {
      name: 'Stwepot',
      amount: 10,
      price: 80,
      image: '/assets/stewpot.jpg',
      isAdded: false,
    },
    {
      name: 'Mug',
      amount: 300,
      price: 40,
      image: '/assets/mug.png',
      isAdded: false,
    },
  ],
  cart: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ name: string }>) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (item && !item.isAdded) {
        item.isAdded = true;
        console.log(item);
        state.cart.push({ ...item, amount: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ name: string }>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex !== -1) {
        const [item] = state.cart.splice(itemIndex, 1);
        const originalItem = state.items.find(
          (item) => item.name === action.payload.name
        );
        if (originalItem) {
          originalItem.isAdded = false;
        }
      }
    },

    increament: (state, action: PayloadAction<{ name: string }>) => {
      const cItem = state.cart.find((i) => i.name === action.payload.name);
      if (cItem) {
        const item = state.items.find((i) => i.name === action.payload.name);
        if (item) {
          if (cItem.amount < item.amount) {
            cItem.amount++;
          }
        }
      }
    },

    decreament: (state, action: PayloadAction<{ name: string }>) => {
      const item = state.cart.find((i) => i.name === action.payload.name);

      if (item && item.amount > 1) {
        item.amount--;
      }
    },

    clear: (state) => {
      for (const item of state.items) {
        const i = state.cart.find((it) => it.name === item.name);
        if (i) {
          item.isAdded = false;
        }
      }

      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, increament, decreament, clear } =
  itemsSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
