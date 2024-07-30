/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllProductQuery, useUpdateProductMutation } from "@/redux/api/baseApi";
import { removeProduct } from "@/redux/feature/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import Swal from 'sweetalert2';

const SelectCard = ({ item }: any) => {
  const dispatch = useAppDispatch();
  const { data: serverProducts } = useGetAllProductQuery({});
  const [updateProduct] = useUpdateProductMutation()

  const [quantity, setQuantity] = useState(1);



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
        dispatch(removeProduct(item?._id));
      }
    });
  };
  // -------------------------Handle Increase Quantity-------------------------
  const handleIncreaseQuantity = async () => {
    if (item?.quantity > 0) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);

      const newUpdate = {
        ...item,
        quantity: item?.quantity - 1
      };

      const newItem = {
        id: item?._id,
        data: newUpdate
      };

      toast.success('Increase product successfully!');
      await updateProduct(newItem);
    }
  };
  // -------------------------Handle Decrease Quantity-------------------------

  const handleDecreaseQuantity = async () => {
    if (quantity < item?.quantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);

      const newUpdate = {
        ...item,
        quantity: item?.quantity + 1
      };

      const newItem = {
        id: item?._id,
        data: newUpdate
      };

      toast.success('Added product successfully!');
      await updateProduct(newItem);
    }
  };

  const count = serverProducts?.data?.find((product: any) => product?._id === item?._id)


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="md:w-1/2">
        <img src={item?.image} alt={item?.name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{item?.name}</h2>
          <button onClick={handleDelete} className="btn text-xl">
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
        <p>{item?.description}</p>
        <h2 className="font-semibold">Brand: {item?.brand}</h2>
        <h2 className="font-semibold">Price: {item?.price}</h2>
        <h2 className="font-semibold">In Stock: {count?.quantity}</h2>
        <div className="card-actions justify-end">
          <div className="flex items-center space-x-2">
            <button
              className="btn"
              onClick={handleDecreaseQuantity}
              // disabled={quantity <= 1}
            >
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button
              className="btn"
              onClick={handleIncreaseQuantity}
              // disabled={parseFloat(count?.quantity) >= quantity}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
