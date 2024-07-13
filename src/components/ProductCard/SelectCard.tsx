/* eslint-disable @typescript-eslint/no-explicit-any */


import { removeProduct } from "@/redux/feature/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'

const SelectCard = (item: any) => {

    const dispatch = useAppDispatch()

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
            dispatch(removeProduct(item?.item?._id))
        });
    }

    return (
        <>
            <div className="card lg:card-side bg-white/40 glass shadow-xl">
                <figure>
                    <img
                        className="h-48 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                        src={item?.item?.image}
                        alt={item?.item?.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item?.item?.name}</h2>
                    <p>{item?.item.name}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleDelete} className="btn text-red-600 text-xl"><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>



        </>
    );
};

export default SelectCard;