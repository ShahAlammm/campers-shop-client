/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/baseApi";


const Products = () => {
    const { data: products, isLoading } = useGetAllProductQuery({})
    if (isLoading) {
        return <>
            <p>Loading.....</p>
        </>
    }
    return (
        <div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                   All Products
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                {products.data?.map((item: any) => <ProductCard item={item} />)}


            </div>
        </div>
    );
};

export default Products;