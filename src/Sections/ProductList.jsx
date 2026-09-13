import React from 'react'
import { useEffect, useState } from "react";
import ProductCard from '../Components/ProductCard';
import Button from '../Components/Button';
import Spinner from '../Components/Spinner';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const[showAllProducts,setShowAllProducts] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const[selectedCategory,setSelectedCategory] = useState('all')
    const categories = [...new Set(products.map((product)=>product.category))]
    const filteredProducts = selectedCategory === 'all' ? products : products.filter((product)=>product.category === selectedCategory)
    const desiredProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);
  return (
    <section className='py-12'>
        <div className='px-4 md:px-8 lg:px-12 space-y-12'>
            <div className='overflow-x-auto space-y-4'>
               <div className='space-x-2 mb-4 min-w-max space-y-2'>
                <button onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full ${selectedCategory === 'all'? 'bg-green-700 text-white': 'bg-gray-200 text-gray-700'}`}>
                        All
                </button>
                    {categories.map((category,index)=>(
                        <button 
                            key={index} onClick={()=>selectedCategory(category)}
                            className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {category}
                        </button>
                    ))}
                </div> 
            </div>
            {loading ? <Spinner/> : (
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
                    {desiredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
            <div className='flex justify-center'>
                <button className='bg-black hover:bg-white hover:text-black hover:border-2 border-black text-white font-bold py-3 px-6 rounded cursor-pointer' onClick={() => setShowAllProducts(!showAllProducts)}>
                    {showAllProducts ? 'Show Less' : 'Show All Products'}
                </button>
            </div>
        </div>
    </section>
  )
}

export default ProductList