import AddProductForm from "@/components/AddProductForm/AddProductForm";
import ManagementCard from "@/components/ProductCard/ManagementCard";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/redux/feature/productSlice";


const ProductManagement = () => {

    const { data: products, isLoading } = useGetAllProductQuery({})
    if (isLoading) {
        return <>
            <p>Loading.....</p>
        </>
    }

    return (
        <div className="py-5">
            <AddProductForm />
            <div className="grid grid-cols-1 gap-4">
                {products?.data?.map((item: TProduct) => <ManagementCard item={item} />)}

            </div>
        </div>
    );
};

export default ProductManagement;