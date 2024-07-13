import { selectCartItems } from "@/redux/feature/productSelector";
import { useAppSelector } from "@/redux/hooks";
import { IoCartSharp } from "react-icons/io5";


const Cart = () => {
    const getCartItem = useAppSelector(selectCartItems)
    return (

        <div className="flex">
            <IoCartSharp className="text-2xl" />
            {getCartItem?.length ? <div className="badge badge-secondary p-1 absolute top-0 ml-3">{getCartItem?.length}</div> : ""}
        </div>

    );
};

export default Cart;