/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const User = () => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',

    });


    // const [addProduct, { data, isError, isLoading, isSuccess }] = useAddProductMutation()
    // console.log({ data, isError, isLoading, isSuccess })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (product) {
            toast.success('User Create successfully')
            // await addProduct(product)
            navigate('/checkout')
        }

    };
    return (
        <div className='py-5'>
            <div className='flex justify-center text-center items-center'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    Add User
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>

                    <div className="lg:flex gap-5 w-full">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
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
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={product.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="lg:flex gap-5 w-full">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Phone Number</span>
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone number"
                                className="input input-bordered"
                                value={product.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Sending Address</span>
                        </label>
                        <textarea
                            name="address"
                            placeholder="address"
                            className="textarea textarea-bordered"
                            value={product.address}
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

export default User;