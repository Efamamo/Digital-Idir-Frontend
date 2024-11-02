// src/features/counter/counterSlice.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { it } from 'node:test';

interface Item {
  id: any;
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
  items: [],
  cart: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    initItems: (state, action: PayloadAction<{ items: Item[] }>) => {
      state.items = action.payload.items;
    },
    addItem: (state, action: PayloadAction<{ item: Item }>) => {
      state.items.push(action.payload.item);
    },
    addToCart: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && !item.isAdded) {
        item.isAdded = true;
        state.cart.push({ ...item, amount: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const [item] = state.cart.splice(itemIndex, 1);
        const originalItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (originalItem) {
          originalItem.isAdded = false;
        }
      }
    },

    increament: (state, action: PayloadAction<{ id: string }>) => {
      const cItem = state.cart.find((i) => i.id === action.payload.id);
      if (cItem) {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item) {
          if (cItem.amount < item.amount) {
            cItem.amount++;
          }
        }
      }
    },

    decreament: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find((i) => i.id === action.payload.id);

      if (item && item.amount > 1) {
        item.amount--;
      }
    },
    clear: (state) => {
      for (const item of state.items) {
        const i = state.cart.find((it) => it.id === item.id);
        if (i) {
          item.isAdded = false;
        }
      }

      state.cart = [];
    },
  },
});

export const {
  initItems,
  addItem,
  addToCart,
  removeFromCart,
  increament,
  decreament,
  clear,
} = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
