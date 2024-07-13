/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { TCartProps } from "@/redux/feature/productSlice";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateProductForm = ({ _id, name, price, description, image, category, quantity, brand, topSelling, slug }: TCartProps) => {
    console.log(name, price, description, image, category, quantity, brand, topSelling, slug)
    const [updateProduct] = useUpdateProductMutation()
    const [product, setProduct] = useState({
        name,
        category,
        brand,
        quantity,
        image,
        price,
        description,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateProduct({ id: _id, data: product });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product updated successfully!",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to update the product. Please try again.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (


        <div className="modal-box backdrop-blur-2xl bg-white/80 max-w-7xl">
            <form className="w-full" onSubmit={handleSubmit}>

                <div className="gap-5 w-full">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            value={product.name}
                            onChange={handleChange}
                            defaultValue={name}
                            required
                        />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Category</span>
                        </label>
                        <select
                            name="category"
                            className="select select-bordered w-full"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >
                            <option disabled selected>Select Category</option>
                            <option>Hiking</option>
                            <option>Camping</option>
                            <option>Mountaineering</option>
                            <option>Climbing</option>
                        </select>
                    </div>
                </div>

                <div className=" gap-5 w-full">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Brand</span>
                        </label>
                        <input
                            type="text"
                            name="brand"
                            placeholder="brand"
                            className="input input-bordered"
                            value={product.brand}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Quantity</span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="quantity"
                            className="input input-bordered"
                            value={product.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="gap-5 w-full">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Image</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="image"
                            className="input input-bordered"
                            value={product.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Price</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="price"
                            className="input input-bordered"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Product Details</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="description"
                        className="textarea textarea-bordered"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-yellow-400" type="submit">Save</button>
                </div>
            </form>
        </div>

    );
};

export default UpdateProductForm;