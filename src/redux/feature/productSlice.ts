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
  quantity: string;
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
    removeProduct: (state, action: PayloadAction<string>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const selling = state.product.find((item) => item.id === action.payload);
      selling!.topSelling = !selling?.topSelling;
    },
    setCart: (state, action: PayloadAction<TProduct>) => {
      state.cart.push(action.payload); // Push item to the cart array
    },
  },
});
export const { addProduct, removeProduct, toggleComplete, setCart } =
  productSlice.actions;
export default productSlice.reducer;
