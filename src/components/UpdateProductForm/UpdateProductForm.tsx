/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";


const UpdateProductForm = () => {

    const [product, setProduct] = useState({
        name: '',
        category: '',
        brand: '',
        quantity: '',
        image: '',
        price: '',
        description: ''
    })


    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {

    }

    return (
        <div className='py-5'>
            <div className='flex justify-center text-center items-center'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    Add New Product Here
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>

                    <div className="lg:flex gap-5 w-full">
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

                    <div className="lg:flex gap-5 w-full">
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

                    <div className="lg:flex gap-5 w-full">
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
        </div>
    );
};

export default UpdateProductForm;