import SelectCard from "@/components/ProductCard/SelectCard";
import { selectCartItems } from "@/redux/feature/productSelector";
import { TProduct } from "@/redux/feature/productSlice";
import { useAppSelector } from "@/redux/hooks";

import { Link } from "react-router-dom";


const Cart = () => {

    const getCartItem = useAppSelector(selectCartItems)

    return (
        <div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    Your Selected Product
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <div className="flex">
                <div className="flex-1">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {getCartItem?.map((item: TProduct) => <SelectCard item={item} />)}
                    </div>
                </div>
                <div className="divider divider-info lg:divider-horizontal"></div>
                <div className="flex-non w-36 lg:w-50 xl:w-80">
                    <div className="justify-center items-center text-center">

                        <h1 className="text-white font-semibold text-2xl">Product Calculation</h1>
                    </div>
                    <div className="py-5 text-white">
                        <p className="text-lg font-semibold">Total Product: {getCartItem?.length}</p>
                        <p className="text-lg font-semibold">Total Amount: </p>
                    </div>
                   <Link to={'/checkout'}> <button className="btn btn-block text-lg font-semibold bg-yellow-500">Checkout</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;