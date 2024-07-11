/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/baseApi";


const Products = () => {
    const { data: products, isLoading, isError } = useGetAllProductQuery({})
    if (isLoading) {
        return <>
            <p>Loading.....</p>
        </>
    }
    console.log(products, isError)
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                {products.data?.map((item: any) => <ProductCard item={item} />)}


            </div>
        </div>
    );
};

export default Products;