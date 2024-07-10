import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
    return (

            <div className="flex">
                <IoCartSharp className="text-2xl"/>
                <div className="badge badge-secondary p-1 absolute top-0 ml-3">+9</div>
            </div>

    );
};

export default Cart;