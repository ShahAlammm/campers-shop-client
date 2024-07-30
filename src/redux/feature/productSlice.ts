/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  topSelling: boolean;
  brand: string;
  quantity: number;
  slug: string;
  isDeleted?: boolean;
};
export type TCartProps = {
  _id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  topSelling: boolean;
  brand: string;
  quantity: number;
  slug: string;
  isDeleted?: boolean;
};

type TInitialState = {
  product: TProduct[];
  cart: TProduct[];
};

const initialState: TInitialState = {
  product: [],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.product.push({ ...action.payload, isDeleted: false });
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      // @ts-ignore
      const selling = state.product.find((item) => item._id === action.payload);
      selling!.topSelling = !selling?.topSelling;
    },
    setCart: (state, action: PayloadAction<TProduct>) => {
      state.cart.push(action.payload); // Push item to the cart array
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      // @ts-ignore
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    updateProductQuantity: (state, action) => {
      // @ts-ignore
      const product = state.find(
        (product: { _id: any }) => product._id === action.payload.id
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});
export const {
  addProduct,
  removeProduct,
  toggleComplete,
  setCart,
  updateProductQuantity,
} = productSlice.actions;
export default productSlice.reducer;
