import ProductCard from "@/components/ProductCard/ProductCard";


const ProductManagement = () => {
    return (
        <div>
            <div className="grid xl:grid-cols-4 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductManagement;