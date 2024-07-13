import ManagementCard from "@/components/ProductCard/ManagementCard";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/redux/feature/productSlice";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductManagement = () => {

    const { data: products, isLoading } = useGetAllProductQuery({})
    if (isLoading) {
        return <>
            <p>Loading.....</p>
        </>
    }

    return (
        <div className="py-5">
            <div className="py-10">
                <Link to={'/addProduct'}><button className="btn btn-block text-2xl uppercase bg-yellow-400">Add new Products<FaPlusCircle className="text-3xl" /></button></Link>
            </div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    All Products
                </h1>
            </div>
            <div className="divider divider-warning pb-5"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {products?.data?.map((item: TProduct) => <ManagementCard item={item} />)}

            </div>
        </div>
    );
};

export default ProductManagement;