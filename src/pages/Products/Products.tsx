/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/baseApi";


const Products = () => {
    const { data: products, isLoading } = useGetAllProductQuery({});
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    const clearFilters = () => {
        setSearch('');
        setCategory('');
        setSortOrder('');
    };

    const filteredProducts = products?.data?.filter((product: any) => {
        return (
            (product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())) &&
            (category ? product.category === category : true)
        );
    }).sort((a: any, b: any) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        );
    }


    return (
        <div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    All Products
                </h1>
            </div>
            {/* All Search and query handle from here*/}
            <div className='flex justify-between mb-4'>
                <div>
                    <div className="join">
                        <select
                            className="select select-bordered join-item"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Filter by Category</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Camping">Camping</option>
                            <option value="Climbing">Climbing</option>
                            <option value="Mountaineering">Mountaineering</option>
                        </select>
                        <select
                            className="select select-bordered join-item"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="join">
                        <input
                            className="input input-bordered join-item"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <button className="btn join-item bg-yellow-400" onClick={clearFilters}>Clear</button>
                    </div>
                </div>
            </div>
            <div className="divider divider-warning"></div>

            {/* Product Card render here */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {filteredProducts?.map((item: any) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;
