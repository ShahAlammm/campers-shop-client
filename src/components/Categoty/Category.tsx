import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";


const Category = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="py-10 ">
            <h1 className="text-4xl font-bold text-yellow-400">Chose Your's Category</h1>
            <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1 text-black">
                Necessary Products
            </h2>


            <div role="tablist" className="tabs tabs-lifted pt-8">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:yellow] [--tab-border-color:orange]"
                    aria-label="Hiking"
                    checked={activeTab === 0}
                    onChange={() => handleTabChange(0)}
                />
                <div role="tabpanel" className={`tab-content  text-black  border-yellow-400 rounded-box p-6 ${activeTab === 0 ? 'block' : 'hidden'}`}>
                    Tab content 1
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:yellow] [--tab-border-color:orange]"
                    aria-label="Camping"
                    checked={activeTab === 1}
                    onChange={() => handleTabChange(1)}
                />
                <div role="tabpanel" className={`tab-content text-black border-yellow-400 rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    <ProductCard />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:yellow] [--tab-border-color:orange]"
                    aria-label="Climbing"
                    checked={activeTab === 2}
                    onChange={() => handleTabChange(2)}
                />
                <div role="tabpanel" className={`tab-content text-black border-yellow-400 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                    Tab content 3
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-black font-bold [--tab-bg:yellow] [--tab-border-color:orange]"
                    aria-label="Mountaineering"
                    checked={activeTab === 3}
                    onChange={() => handleTabChange(3)}
                />
                <div role="tabpanel" className={`tab-content text-black border-yellow-400 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                    Tab content 4
                </div>

            </div>
        </div>
    );
};

export default Category;