import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Product } from "../types";

interface ItemState {
  items: Product[];
  total: number;
}

const initialState: ItemState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state: ItemState,
      action: PayloadAction<Product & { quantityAction: "add" | "remove" }>
    ) => {
      const item = action.payload;
      const existItem = state.items.find(
        (x) => x.id === item.id && x.size === item.size
      );

      if (existItem) {
        return {
          ...state,
          items: state.items.map((stateItem) => {
            const newItem = {
              ...stateItem,
              quantity:
                item.quantityAction === "add"
                  ? stateItem.quantity + 1
                  : stateItem.quantity - 1,
            };
            return stateItem.id === existItem.id ? newItem : stateItem;
          }),
        };
      } else {
        item.quantity = 1;
        return {
          ...state,
          items: [...state.items, item],
        };
      }
    },
    remItem: (state: ItemState, action: PayloadAction<Product>) => {
      return {
        ...state,
        items: state.items.filter((item) => {
          return (
            item.id !== action.payload.id || item.size !== action.payload.size
          );
        }),
      };
    },
    setCartTotal: (state: ItemState) => {
      return {
        ...state,
        total: +state.items
          .reduce(
            (total, product) => total + +product.price * product.quantity,
            0
          )
          .toFixed(2),
      };
    },
    remAllItems: (state: ItemState) => {
			state.items = [];
		}
  },
});


export const {  remAllItems } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export function handleItem(item: Product, quantityAction: "add" | "remove") {
  return (dispatch: Dispatch) => {
    dispatch(cartSlice.actions.addItem({ ...item, quantityAction }));
    dispatch(cartSlice.actions.setCartTotal());
  };
}

export function removeItem(item: Product) {
  return (dispatch: Dispatch) => {
    dispatch(cartSlice.actions.remItem(item));
    dispatch(cartSlice.actions.setCartTotal());
  };
}
