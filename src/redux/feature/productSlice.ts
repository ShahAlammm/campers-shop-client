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
};

const initialState: TInitialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.product.push({ ...action.payload, isDeleted: false });
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
