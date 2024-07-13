/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDeleteProductMutation, useUpdateProductMutation } from "@/redux/api/baseApi";
import { TCartProps } from "@/redux/feature/productSlice";
import { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import Swal from 'sweetalert2'
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";

const ManagementCard = ({ _id, name, price, description, image, category, quantity, brand, topSelling, slug }: TCartProps) => {
    const [updateProduct] = useUpdateProductMutation()
    const [deleteProduct] = useDeleteProductMutation()

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
                    icon: "success"
                });
                deleteProduct(_id)
            }
        });
    }

    const toggleState = () => {

        const newUpdate = {

            name: name,
            price: price,
            image: image,
            description: description,
            category: category,
            topSelling: !topSelling,
            brand: brand,
            quantity: quantity,
            slug: slug,
        };

        const newItem = {
            id: _id,
            data: newUpdate
        }
        toast.success('Add to topSelling product successfully !')
        updateProduct(newItem)

    }


    // ------------------Modal-----------------------

    const modalRef = useRef<HTMLDialogElement>(null);

    const handleOpenModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleCloseModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-white/40 glass shadow-xl">
                <figure>
                    <img
                        className="h-48 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-end ">
                        <label className="label cursor-pointer items-center gap-2">
                            <span className="label-text font-semibold">Top Selling</span>
                            <input
                                onChange={toggleState}
                                type="checkbox"
                                defaultChecked={topSelling} className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p>{name}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleOpenModal} className="btn text-xl text-blue-600"><FaEdit /></button>
                        <button onClick={handleDelete} className="btn text-red-600 text-xl"><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <dialog id="my_modal_4" ref={modalRef} className="modal backdrop-blur-lg bg-black/10 modal-bottom z-0 sm:modal-middle">


                <UpdateProductForm name={name} price={price} category={category} description={description} quantity={quantity} brand={brand} _id={_id} image={image} topSelling={topSelling} slug={slug} />

                <div className="modal-action">
                    <form method="dialog">
                        {/* Buttons */}
                        <button className="btn bg-yellow-400" onClick={handleCloseModal}>
                            Close
                        </button>
                    </form>
                </div>

            </dialog>
        </>
    );
};

export default ManagementCard;