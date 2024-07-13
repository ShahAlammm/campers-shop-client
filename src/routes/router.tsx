import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "@/pages/Products/Products";
import Cart from "@/pages/Cart/Cart";
import ProductManagement from "@/pages/ProductsManagement/ProductManagement";
import Checkout from "@/pages/Checkout/Checkout";
import App from "@/App";
import AddProductForm from "@/components/AddProductForm/AddProductForm";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/management',
                element: <ProductManagement />
            },
            {
                path: 'addProduct',
                element: <AddProductForm />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])


export default router;