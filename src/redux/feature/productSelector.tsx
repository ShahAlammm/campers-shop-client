// productSelectors.ts
import { RootState } from '@/redux/store'; // Adjust path to RootState as per your project structure
import { TProduct } from './productSlice';

// Selector to get all products
export const selectProducts = (state: RootState): TProduct[] => state.product.product;

// Selector to get items in the cart
export const selectCartItems = (state: RootState): TProduct[] => state.product.cart;
