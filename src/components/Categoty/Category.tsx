import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/redux/feature/productSlice";



const Category = () => {



    const [activeTab, setActiveTab] = useState(0);

    const { data: products, isLoading } = useGetAllProductQuery({})


    if (isLoading) {
        return <>
            <div className="flex justify-center items-center">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        </>
    }


    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    const hiking = products?.data?.filter((item: { category: string }) => item.category === "Hiking");
    const camping = products?.data?.filter((item: { category: string }) => item.category === "Camping");
    const climbing = products?.data?.filter((item: { category: string }) => item.category === "Climbing");
    const mountaineering = products?.data?.filter((item: { category: string }) => item.category === "Mountaineering");

    return (
        <div className="py-10 ">
            <h1 className="text-4xl font-bold text-yellow-400">Chose Your's Category</h1>
            <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1 text-white">
                Necessary Products
            </h2>


            <div role="tablist" className="tabs tabs-lifted pt-8">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:#facc15] [--tab-border-color:orange]"
                    aria-label="Hiking"
                    checked={activeTab === 0}
                    onChange={() => handleTabChange(0)}
                />
                <div role="tabpanel" className={`tab-content    border-yellow-400 rounded-box p-6 ${activeTab === 0 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {hiking?.map((item: TProduct) => (
                            <ProductCard item={item} />
                        ))}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:#facc15] [--tab-border-color:orange]"
                    aria-label="Camping"
                    checked={activeTab === 1}
                    onChange={() => handleTabChange(1)}
                />
                <div role="tabpanel" className={`tab-content  border-yellow-400 rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {camping?.map((item: TProduct) => (
                            <ProductCard item={item} />
                        ))}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:#facc15] [--tab-border-color:orange]"
                    aria-label="Climbing"
                    checked={activeTab === 2}
                    onChange={() => handleTabChange(2)}
                />
                <div role="tabpanel" className={`tab-content  border-yellow-400 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {climbing?.map((item: TProduct) => (
                            <ProductCard item={item} />
                        ))}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:#facc15] [--tab-border-color:orange]"
                    aria-label="Mountaineering"
                    checked={activeTab === 3}
                    onChange={() => handleTabChange(3)}
                />
                <div role="tabpanel" className={`tab-content  border-yellow-400 rounded-box p-6 ${activeTab === 3 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {mountaineering?.map((item: TProduct) => (
                            <ProductCard item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;