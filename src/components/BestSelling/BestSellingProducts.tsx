import { useGetAllProductQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/redux/feature/productSlice";

const BestSellingProducts = () => {
    const { data: products, isLoading } = useGetAllProductQuery({});

    if (isLoading) {
        return <p>Loading.....</p>;
    }

    const bestSells = products?.data?.filter((item: { topSelling: boolean; }) => item.topSelling === true);

    return (
        <div className="my-5">
            <h1 className="text-4xl font-bold text-yellow-400">Best Selling</h1>
            <h2 className="text-2xl font-bold my-2 border-l-4 border-l-yellow-400 px-1 text-white">
                Recommended Products
            </h2>
            <div className="divider divider-warning"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-4 mx-auto my-5">
                {bestSells?.slice(0, 3).map((item: TProduct) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;
